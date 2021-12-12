const fetch = require('node-fetch');
const endpoint = `https://api.standupmichigan.com/graphql`;
async function getNews() {
  const getNewsPosts = await fetch(endpoint, {
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
          filter: { status: { _eq: "published" } }
        ) {
            id
            title
            author {
              first_name,
              last_name,
            }
            content
            featured_image {
              id
            }
            published_on
          }
      }`
    }),
  });
  const response = await getNewsPosts.json();
  return response;
};

module.exports = getNews();