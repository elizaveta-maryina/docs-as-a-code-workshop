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
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/elizaveta-maryina/docs-as-a-code-workshop/edit/main/my-website/',
          remarkPlugins: [simplePlantUML],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],

    [
      'redocusaurus',
      {
        specs: [{ id: 'oms', spec: 'docs/api/openapi.yaml' }],
        theme: { primaryColor: '#1890ff' },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Курсовой проект',
      items: [
        {
          to: '/api/oms',
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