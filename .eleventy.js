module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'sass/styles.scss': 'css' });

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
  };
};
