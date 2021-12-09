const fetch = require('node-fetch');
const endpoint = `https://api.standupmichigan.com/graphql`;
async function getCounties() {
  const getCountyNames = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer WvqjmA5UwADGLZ`,
    },
    body: JSON.stringify({
      query: `{
        counties {
          name
        }
      }`
    }),
  });
  const response = await getCountyNames.json();
  return response;
};

module.exports = getCounties();