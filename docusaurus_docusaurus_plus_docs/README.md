# Docusaurus + GitHub Pages (вариант 2)

## Что уже подготовлено

- `my-website/docs/` — структура документации (страницы и разделы)
- `my-website/static/` — ассеты (картинки, BPMN/DMN файлы, OpenAPI)
- `my-website/docusaurus.config.js` и `my-website/sidebars.js`
- `.github/workflows/deploy.yml` — автодеплой на GitHub Pages

## Что нужно заменить перед запуском

В `my-website/docusaurus.config.js` замени плейсхолдеры:

- `<username>` → твой GitHub username
- `<repository-name>` → имя репозитория

И ссылку на GitHub в `navbar.items`.

## Как запустить локально

```bash
cd my-website
npm install
npm run start
```

## Как деплоить

1) Запушь в ветку `main`.
2) GitHub Actions соберёт сайт и выложит его в ветку `gh-pages`.
3) В Settings → Pages выбери Source: `gh-pages` и папку `/ (root)`.
