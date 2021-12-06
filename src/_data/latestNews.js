const fetch = require('node-fetch');
const endpoint = `https://api.standupmichigan.com/graphql`;
async function getLatestNews() {
  const getPost = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer WvqjmA5UwADGLZ`,
    },
    body: JSON.stringify({
      query: `{
        news(
                sort: ["sort", "-published_on"],
                limit: 1,
                filter: { status: { _eq: "published" } }
            ) {
          id
          title
        }
      }`
    }),
  });
  const response = await getPost.json();
  return response;
};

module.exports = getLatestNews();