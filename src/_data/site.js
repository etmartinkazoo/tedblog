const environmentSpecificVariables = {
  development: {
    url: 'http://localhost:8080',
  },
  production: {
    url: '',
  },
};

module.exports = {
  title: 'Brem Static',
  author: 'Brem LLC',
  email: 'info@brem.io',
  description: 'JAMStack frontend for marketing sites',
  keywords: ['JavaScript', 'SEO', 'Marketing'],
  language: 'en-US',
  favicon: {
    widths: [32, 57, 76, 96, 128, 192, 228],
    format: 'png',
  },
  ...environmentSpecificVariables[process.env.ELEVENTY_ENV],
};
