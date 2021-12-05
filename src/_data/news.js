const fetch = require("node-fetch");

module.exports = async function() {
  let url = "https://api.standupmichigan.com/items/news?sort=sort,-published_on&access_token=WvqjmA5UwADGLZ"
  return await fetch(url)
    .then(data => data.json())
};
