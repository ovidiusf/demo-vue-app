module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  transpileDependencies: ['vuetify'],
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    }
  }
};
