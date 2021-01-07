module.exports = {
  /*
  publicPath:
    process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:8080/',
  */
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "~@/assets/styles/_variables.scss";
        `
      }
    }
  }
};
