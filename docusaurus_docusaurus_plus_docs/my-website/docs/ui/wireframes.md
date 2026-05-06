---
title: "Wireframes"
sidebar_position: 1
---
# Wireframes и роутинг

Низкодетализированные макеты экранов (wireframes) и переходы между ними.

## Роуты

- **Реестр заказов** — `/orders`
- **Карточка заказа** — `/orders/{orderId}`
- **Управление каналами продаж** — `/channels`

## Переходы

- `/orders` → клик по строке заказа → `/orders/{orderId}`
- `/orders/{orderId}` → кнопка «Назад» → `/orders`
- `/orders` → переход в управление каналами → `/channels`
- `/channels` → клик «Назад»/кнопка браузера → `/orders`

## Макет

![Wireframes](/img/wireframes.png)
