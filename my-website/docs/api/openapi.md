---
title: "OpenAPI"
sidebar_position: 1
---
# OpenAPI спецификация

Спецификация MVP лежит в файле: `/static/openapi/openapi.yaml`.

## Просмотр в формате Redoc

Ниже можно подключить Redoc через **redocusaurus** (если плагин настроен в `docusaurus.config.js`):

```mdx
import { RedocStandalone } from '@theme/RedocStandalone';

<RedocStandalone specUrl="/openapi/openapi.yaml" />
```

Если вы не используете MDX, можно оставить ссылку на файл:

- [openapi.yaml](/openapi/openapi.yaml)
