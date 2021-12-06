const fetch = require('node-fetch');
const endpoint = `https://api.standupmichigan.com/graphql`;
async function getGlobals() {
  const getGlobalItems = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer WvqjmA5UwADGLZ`,
    },
    body: JSON.stringify({
      query: `{
        globals {
          social_accounts
          youtube_subscribers
          group_shutdown_by_facebook
          page_shutdown_by_facebook
        }
      }`
    }),
  });
  const response = await getGlobalItems.json();
  return response;
};

module.exports = getGlobals();