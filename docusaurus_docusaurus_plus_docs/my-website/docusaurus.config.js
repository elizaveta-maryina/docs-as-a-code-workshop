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
  future: {
  experimental_faster: false,
  useCssCascadeLayers: false,
},

  plugins: [
    ['docusaurus-plugin-drawio', {}],
  ],

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

    // Redoc (OpenAPI)
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'oms',
            spec: 'static/openapi/openapi.yaml',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Курсовой проект',
      items: [
        { to: '/docs/intro', label: 'Документация', position: 'left' },
        { to: '/docs/api/oms', label: 'OpenAPI', position: 'left' },
        {
          href: 'https://github.com/elizaveta-maryina/docs-as-a-code-workshop',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            { label: 'О проекте', to: '/docs/intro' },
            { label: 'OpenAPI', to: '/docs/api/oms' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
  },
};

module.exports = config;