module.exports = function(eleventyConfig) {
  // Copy your CSS and static assets straight to the output folder
  eleventyConfig.addPassthroughCopy("style.css");

  return {
    dir: {
      input: ".",          // Scans your root/content folders
      output: "_site",     // Cloudflare Pages will point to this folder
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
