const now = String(Date.now());

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.addWatchTarget('./src/css/main.css');

  eleventyConfig.addPassthroughCopy({ 'assets/images': 'images' });

  eleventyConfig.addShortcode('timestamp', function () {
    return now;
  });
}