module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.addWatchTarget('./src/css/main.css');
}