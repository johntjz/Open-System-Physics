module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");

  // Sort content collection strictly by logical puzzle order (1 -> 14)
  eleventyConfig.addCollection("chapters", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/*.md").sort((a, b) => {
      return (a.data.order || 999) - (b.data.order || 999);
    });
  });

  // Extract English (top) or Traditional Chinese (bottom) half of split content
  eleventyConfig.addFilter("langSection", function(content, lang = "en") {
    if (!content) return "";
    const parts = content.split("<!-- LANG_SPLIT -->");
    if (lang === "zh" && parts.length > 1) {
      return parts[1];
    }
    return parts[0];
  });

  // Pad chapter numbers (01, 02, ... 14)
  eleventyConfig.addFilter("padNumber", function(num) {
    if (!num) return "00";
    return String(num).padStart(2, "0");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
