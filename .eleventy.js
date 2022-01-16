const Image = require("@11ty/eleventy-img");
const moment = require('moment-timezone');

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600],
    formats: ["webp", "jpeg"],
    urlPath: "/assets/images/",
    outputDir: "./dist/assets/images/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async"
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
    let pathPrefix = "/";
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addFilter("dateformat", function(dateIn) {
      return moment(dateIn).tz('GMT').format('MMMM DD, YYYY');
    });
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        },
    };
};
