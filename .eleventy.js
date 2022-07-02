module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.markdownTemplateEngine = "njk";

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
