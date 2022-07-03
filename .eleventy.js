// Plugin for PrismJS syntax highlighting
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.markdownTemplateEngine = "njk";
  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
