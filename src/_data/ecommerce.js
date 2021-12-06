const fetch = require('node-fetch');
const endpoint = `https://api.standupmichigan.com/graphql`;
async function getEcommerce() {
  const getEcommerceItems = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer WvqjmA5UwADGLZ`,
    },
    body: JSON.stringify({
      query: `{
        ecommerce {
          products
          donations
        }
      }`
    }),
  });
  const response = await getEcommerceItems.json();
  return response;
};

module.exports = getEcommerce();