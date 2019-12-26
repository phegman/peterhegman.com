const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData:
          '@import "@/scss/_variables.scss"; @import "~bootstrap/scss/mixins/_breakpoints.scss";',
      },
    },
  },
};
