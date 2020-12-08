const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      },
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    optimization: {
      minimize: false
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'ko',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
