const now = String(Date.now());

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.addWatchTarget('./src/');

  eleventyConfig.addPassthroughCopy({ 'assets/images': 'images' });
  eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });

  eleventyConfig.addShortcode('timestamp', function () {
    return now;
  });
}