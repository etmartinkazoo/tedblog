const fetch = require('node-fetch');
const endpoint = `https://api.standupmichigan.com/graphql`;
async function getHomeValues() {
  const getHomeItems = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer WvqjmA5UwADGLZ`,
    },
    body: JSON.stringify({
      query: `{
        home {
          youtube_video_id
        }
      }`
    }),
  });
  const response = await getHomeItems.json();
  return response;
};

module.exports = getHomeValues();