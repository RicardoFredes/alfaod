const withStylus = require('@zeit/next-stylus')
const rupture = require('rupture')

module.exports = withStylus({
  stylusLoaderOptions: {
    use: [rupture()]
  }
})
