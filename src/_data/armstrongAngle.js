const fetch = require('node-fetch');
const endpoint = `https://api.standupmichigan.com/graphql`;
async function getArmstrongAngle() {
  const getPosts = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer WvqjmA5UwADGLZ`,
    },
    body: JSON.stringify({
      query: `{
        armstrong_angle {
          id
          title
          links
          commentary
          featured_image {
            id
          }
          publish_on
        }
      }`
    }),
  });
  const response = await getPosts.json();
  return response;
};

module.exports = getArmstrongAngle();