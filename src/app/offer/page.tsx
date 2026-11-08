import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { contacts } from "@/data/contacts";

export const metadata: Metadata = {
  title: "Публичная оферта",
};

export default function OfferPage() {
  return (
    <LegalPage title="Публичная оферта" updated="01.09.2023">
      <section>
        <h2>Предмет договора</h2>
        <p>
          SurfTrainCo проводит занятия по серфингу на искусственной волне по адресу: {contacts.fullAddress}. Клиент
          оплачивает выбранный тариф и посещает занятия по согласованному расписанию.
        </p>
      </section>
      <section>
        <h2>Запись и оплата</h2>
        <ul>
          <li>запись оформляется через форму на сайте или по телефону {contacts.phone};</li>
          <li>оплата производится до начала первого занятия;</li>
          <li>стоимость тарифов указана на сайте и действует на дату оплаты.</li>
        </ul>
      </section>
      <section>
        <h2>Перенос и отмена</h2>
        <p>
          Занятие можно перенести, предупредив администратора не позднее чем за 24 часа. При более поздней отмене урок
          считается проведённым.
        </p>
      </section>
      <section>
        <h2>Безопасность</h2>
        <p>
          Клиент обязан соблюдать указания инструктора и правила поведения на волне. Оборудование и гидрокостюм
          предоставляются школой и входят в стоимость тарифа.
        </p>
      </section>
    </LegalPage>
  );
}
