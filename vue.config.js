module.exports = {
  devServer: {
    disableHostCheck: true,
  },

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/lms/'
    : '/'
}
