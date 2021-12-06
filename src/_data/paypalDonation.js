const fetch = require('node-fetch');
const endpoint = `https://api.standupmichigan.com/graphql`;
async function getDonation() {
  const getDonationLink = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer WvqjmA5UwADGLZ`,
    },
    body: JSON.stringify({
      query: `{
        ecommerce {
          donations
          products
        }
      }`
    }),
  });
  const response = await getDonationLink.json();
  return response;
};

module.exports = getDonation();