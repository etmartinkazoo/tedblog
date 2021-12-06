const fetch = require('node-fetch');
const endpoint = `https://api.standupmichigan.com/graphql`;
async function getNews() {
  const getBlogs = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer WvqjmA5UwADGLZ`,
    },
    body: JSON.stringify({
      query: `{
        news(sort: ["sort", "-published_on"]) {
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
        }
      }`
    }),
  });
  const response = await getBlogs.json();
  return response;
};

module.exports = getNews();