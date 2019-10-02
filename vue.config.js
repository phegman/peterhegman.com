const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data:
          '@import "@/scss/_variables.scss"; @import "~bootstrap/scss/mixins/_breakpoints.scss";',
      },
    },
  },
};
