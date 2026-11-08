export type NavLink = {
  id: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { id: "about", label: "О нас" },
  { id: "awards", label: "Награды" },
  { id: "plans", label: "Тарифы" },
  { id: "promo", label: "Акции" },
  { id: "signup", label: "Запись" },
  { id: "contacts", label: "Контакты" },
];

export const footerLinks = navLinks.filter((link) => link.id !== "signup");
