module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");

  // Sort content collection strictly by logical puzzle order (1 -> 16)
  eleventyConfig.addCollection("chapters", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/*.md").sort((a, b) => {
      return (a.data.order || 999) - (b.data.order || 999);
    });
  });

  // Clean any raw LaTeX arrows/subscripts into crisp Unicode symbols
  function cleanMathSymbols(str) {
    if (!str) return "";
    return str
      .replace(/\$S\\uparrow\s*\\iff\s*S\\downarrow\$/g, "S↑ ⟺ S↓")
      .replace(/\$S\\downarrow\$/g, "S↓")
      .replace(/\$S\\uparrow\$/g, "S↑")
      .replace(/\$SpO_2\$/g, "SpO₂")
      .replace(/\$\\beta_2\$/g, "β₂")
      .replace(/\$\\rightarrow\$/g, "→")
      .replace(/\$\\le\$/g, "≤")
      .replace(/\\rightarrow/g, "→")
      .replace(/\\downarrow/g, "↓")
      .replace(/\\uparrow/g, "↑")
      .replace(/\\iff/g, "⟺")
      .replace(/\\le/g, "≤")
      .replace(/\u200B/g, "");
  }

  // Extract English (top) or Traditional Chinese (bottom) half of split content
  eleventyConfig.addFilter("langSection", function(content, lang = "en") {
    if (!content) return "";
    const cleaned = cleanMathSymbols(content);
    const parts = cleaned.split("<!-- LANG_SPLIT -->");
    if (lang === "zh" && parts.length > 1) {
      return parts[1];
    }
    return parts[0];
  });

  // Pad chapter numbers (01, 02, ... 16)
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
