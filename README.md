# Структура:

Hero
What I Do (cards)
Featured Projects
Case Study block
Tech Stack
Numbers
About / Timeline
Contact

# Общая логика страницы:

Кто 
Чем сильна
Что умеею
Как думаю
Как с связаться

И при этом чередуем:
текст
карточки
визуальные блоки
интерактив
цифры
кейсы

Направление: Чистый светлый минимализм

Проекты как мини-кейсы
Структура по блокам:

  1. Hero section  — “Identity block” . Тип блока: крупная типографика + воздух

Содержимое:

Имя

Роль (Frontend Developer)

1 сильная фраза (value statement)

Можно добавить:

subtle cursor effect

микро-анимацию текста

плавный fade-in

Задача блока: первое впечатление — уверенность и чистота.  



2. “What I Do” — не текст, а 3 карточки : 

Тип блока: карточки / grid  

Карточки:

Frontend Development

UI, SPA, responsive apps 

Clean Architecture

Components, state management

UX Thinking

Structure, clarity, accessibility



Можно добавить:

hover эффект

лёгкое смещение карточки

иконку (минимал)



3. Featured Projects — визуальный блок

Тип блока: крупные превью проектов

Формат:

Большой скрин

Короткое описание

Tech stack

Кнопки (Live / GitHub / Case)

Можно сделать:

alternating layout (картинка слева/справа)

карусель

hover → появляется overlay

subtle animation on scroll

 Ритм: светлый фон, затем чуть серый фон.  

4. Case Study Preview 

expandable section (аккордеон)

или кнопку “Read case”

Структура:

Problem
Solution
Tech Stack
Impact

Можно добавить:

Tech Stack —

categorized grid:

Frontend / Backend / Tools

Блок должен визуально отличаться от предыдущего.

5. Numbers block ??? Опыта может маловато . надо подумать над содержанием

3+ Projects

1+ Year coding

100% Responsive

6. About — личный, но структурный

Не длинный текст.

Можно сделать split-layout:

Левая колонка:

короткий bio

Правая:

timeline (2023 – course, 2024 – projects, 2025 – applying remote)

7. Contact — простой, но аккуратный

Можно сделать:

заполнить форму с контактными данными

минималистичную форму

или просто email + social

с subtle hover анимацией



Дополнительные интерактивные идеи:

Zu den Animationen:
Hover на карточках > Sehr gut
Smooth scroll > bitte nicht
Scroll reveal > Gerne - aber nicht zuviel
Sticky nav > auf jeden Fall und Responsive Menu 
Light/dark toggle > vlt später
Animated underline links > gerne
Cursor micro effect > bitte nicht

Визуальное направление

Белый фон

Черный текст

Один акцентный цвет (синий / темно-зеленый/...)

Много воздуха

Четкая типографика

Минимум анимации



# To run the application: 
npm run dev

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


