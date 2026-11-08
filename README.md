# SurfTrainCo

Сайт школы серфинга на Next.js.

## Стек

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- EmailJS — отправка заявок с формы записи на почту
- MapLibre GL + OpenFreeMap — интерактивная карта

## Запуск

```bash
npm install
cp .env.example .env.local
npm run dev
```

Сборка: `npm run build`, проверка кода: `npm run lint`.

## Структура

```
src/
  app/              страницы: главная, /privacy, /offer, 404
  assets/images/    изображения
  components/
    layout/         шапка, меню, футер, шаблон текстовых страниц
    sections/       секции главной страницы
    ui/             общие элементы
  data/             контент: контакты, навигация, тарифы, награды, акции
  lib/              отправка через EmailJS, маска телефона
  providers/        контекст выбранного тарифа
```

## EmailJS

1. Зарегистрироваться на [emailjs.com](https://www.emailjs.com), в Email Services подключить свою почту.
2. В Email Templates создать шаблон, в теле использовать переменные `{{name}}`, `{{phone}}`, `{{date}}`, `{{time}}`, `{{plan}}`.
3. Заполнить `.env.local`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

На Vercel те же переменные добавляются в Settings → Environment Variables.
