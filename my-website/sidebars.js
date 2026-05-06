/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Концепция',
      items: ['concept/scope'],
    },
    {
      type: 'category',
      label: 'Требования',
      items: ['requirements/fr-nfr', 'requirements/elicitation'],
    },
    {
      type: 'category',
      label: 'UI',
      items: ['ui/wireframes'],
    },
    {
      type: 'category',
      label: 'Бизнес‑процессы',
      items: ['processes/bpmn-dmn'],
    },
    {
      type: 'category',
      label: 'API',
      items: ['api/openapi'],
    },
    {
      type: 'category',
      label: 'Данные',
      items: ['data/erd'],
    },
  ],
};

module.exports = sidebars;
