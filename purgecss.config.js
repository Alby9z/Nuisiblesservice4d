module.exports = {
  content: ["/**/*.html", "/**/*.js"],
  css: ["/css/style.css"],
  output: "css/style.purged.css",
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};
