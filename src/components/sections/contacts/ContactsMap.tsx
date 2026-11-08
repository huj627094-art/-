"use client";

import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";
import type { Map as MapLibreMap, StyleSpecification } from "maplibre-gl";
import { contacts } from "@/data/contacts";

const STYLE_URL = "https://tiles.openfreemap.org/styles/positron";

const fillColors: Record<string, string> = {
  background: "#eef5ff",
  park: "#e1ecfa",
  water: "#c6daf2",
  landuse_residential: "#e8f0fc",
  landcover_wood: "#dce8f8",
  building: "#d9e3f1",
};

const locale = {
  "NavigationControl.ZoomIn": "Приблизить",
  "NavigationControl.ZoomOut": "Отдалить",
  "AttributionControl.ToggleAttribution": "Источники данных",
  "CooperativeGesturesHandler.WindowsHelpText": "Чтобы изменить масштаб, крутите колёсико с зажатым Ctrl",
  "CooperativeGesturesHandler.MacHelpText": "Чтобы изменить масштаб, крутите колёсико с зажатым ⌘",
  "CooperativeGesturesHandler.MobileHelpText": "Перемещайте карту двумя пальцами",
};

function recolor(style: StyleSpecification): StyleSpecification {
  const layers = style.layers.map((layer) => {
    const paint: Record<string, unknown> = { ...layer.paint };
    const layout: Record<string, unknown> = { ...layer.layout };

    if (layer.type === "background" || layer.type === "fill") {
      const color = fillColors[layer.id];
      if (color) paint[layer.type === "background" ? "background-color" : "fill-color"] = color;
    }

    if (layer.type === "line") {
      if (layer.id.includes("casing")) paint["line-color"] = "#d3deed";
      else if (layer.id.startsWith("highway") || layer.id.startsWith("tunnel")) paint["line-color"] = "#ffffff";
      else if (layer.id.startsWith("railway")) paint["line-color"] = "#d3deed";
    }

    if (layer.type === "symbol" && layout["text-field"] && !layer.id.includes("shield")) {
      layout["text-field"] = ["coalesce", ["get", "name:ru"], ["get", "name"]];
      paint["text-color"] = layer.id.startsWith("label") ? "#385462" : "#6f8597";
    }

    return { ...layer, paint, layout } as typeof layer;
  });

  return { ...style, layers };
}

function createPin() {
  const pin = document.createElement("div");
  pin.className = "map-pin";
  pin.setAttribute("role", "img");
  pin.setAttribute("aria-label", contacts.address);
  pin.append(document.createElement("span"));
  return pin;
}

export function ContactsMap({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: MapLibreMap | undefined;
    let cancelled = false;

    Promise.all([
      import("maplibre-gl"),
      fetch(STYLE_URL).then((response) => response.json() as Promise<StyleSpecification>),
    ])
      .then(([{ default: maplibre }, style]) => {
        const container = containerRef.current;
        if (cancelled || !container) return;

        const desktop = window.matchMedia("(min-width: 768px)").matches;
        const [lat, lng] = contacts.coordinates;

        map = new maplibre.Map({
          container,
          style: recolor(style),
          center: [lng, lat],
          zoom: desktop ? 15.6 : 14.8,
          attributionControl: false,
          cooperativeGestures: true,
          dragRotate: false,
          pitchWithRotate: false,
          touchPitch: false,
          locale,
        });

        map.touchZoomRotate.disableRotation();
        map.addControl(new maplibre.NavigationControl({ showCompass: false }), "top-right");
        map.addControl(new maplibre.AttributionControl({ compact: true }), "bottom-left");

        const popup = new maplibre.Popup({ offset: 62, closeButton: false }).setHTML(
          `<b>SurfTrainCo</b><br>${contacts.fullAddress}`,
        );

        new maplibre.Marker({ element: createPin(), anchor: "bottom", offset: [0, -9] })
          .setLngLat([lng, lat])
          .setPopup(popup)
          .addTo(map);

        if (desktop) map.panBy([-container.clientWidth * 0.12, 0], { duration: 0 });
        else
          map.once("load", () => {
            container.querySelector(".maplibregl-ctrl-attrib")?.classList.remove("maplibregl-compact-show");
          });
      })
      .catch(() => {
        containerRef.current?.classList.add("map-fallback");
      });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div role="region" aria-label="Карта проезда" className={className}>
      <div ref={containerRef} className="size-full" />
    </div>
  );
}
