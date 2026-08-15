# JalgrattaEksam 🚲 (Estonian Bicycle Theory Exam Trainer)

Интерактивное веб-приложение для подготовки к теоретическому экзамену на получение велосипедных прав в Эстонии по официальным стандартам **Transpordiamet** и **Liiklusseadus**.

## 🌟 Возможности

- **Режим симуляции экзамена (Eksamirežiim)**: 15 вопросов, 30 минут, сдача при минимум 13 верных ответах (максимум 2 ошибки).
- **10 официальных категорий Transpordiamet**:
  1. Teeandmise kohustus (Обязанность уступить дорогу)
  2. Sõiduki asukoht sõitmisel (Расположение на дороге)
  3. Vasak- ja tagasipööre (Левый поворот и разворот)
  4. Ümberpõige takistusest (Объезд препятствий)
  5. Sõitmine ristmikel (Проезд перекрестков)
  6. Sõidutee ületamine ülekäigurajal (Пешеходные переходы)
  7. Jalakäijate ohutus (Безопасность пешеходов)
  8. Jalgrattateed ja -rajad (Велосипедные дорожки и полосы)
  9. Pime aeg ja nähtavus (Темное время суток и видимость)
  10. Ohutus, kiiver ja varustus (Безопасность, шлем и оснащение)
- **Интерактивные векторные схемы и знаки**: SVG-схемы перекрестков, дорожных знаков (221, 222, 211, 431, 433, 313a, 543, 573).
- **Мультиязычность**: Эстонский (ET), Русский (RU), Английский (EN).
- **Работа над ошибками & Марафон**: Повторение сложных вопросов и сквозное тестирование.
- **Справочник ПДД и дорожных знаков**: Конспект правил, ограничений по возрасту (10-15 лет) и экипировке.

## 🛠 Стек технологий

- [Next.js 16 (App Router)](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

## 🚀 Запуск локально

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📦 Сборка для продакшена

```bash
npm run build
npm run start
```
