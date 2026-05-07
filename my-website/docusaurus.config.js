const simplePlantUML = require('@akebifiky/remark-simple-plantuml');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Курсовой проект',
  tagline: 'Документация системы управления заказами',
  favicon: 'img/favicon.ico',

  url: 'https://elizaveta-maryina.github.io',
  baseUrl: '/docs-as-a-code-workshop/',
  organizationName: 'elizaveta-maryina',
  projectName: 'docs-as-a-code-workshop',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  plugins: [['docusaurus-plugin-drawio', {}]],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath:'./sidebars.js',
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/elizaveta-maryina/docs-as-a-code-workshop/edit/main/my-website/',
          remarkPlugins: [simplePlantUML],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'oms',
            spec: 'static/openapi/openapi.yaml',
            route: 'docs/api/oms',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      }
    ],
  ],

  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    navbar: {
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Документация',
        },
        {
          to: 'docs/api/oms',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://github.com/elizaveta-maryina/docs-as-a-code-workshop',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
};

module.exports = config;