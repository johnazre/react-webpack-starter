var path = require('path');

module.exports = {
  // define entry point
  entry: path.resolve(__dirname, 'src') + '/app/index.js',

  // define output point
  output: {
    path: path.resolve(__dirname, 'dist') + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },

  // define loaders
  module: {
    loaders: [
      {
        test: /\.js$/, // file extension to test for
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader', 
        query: {
          presets: ['react', 'env']
        }
      },
      {
        test: /\.scss$/, 
        loader: 'style-loader!css-loader!sass-loader', // To add loaders, use !
      },
    ]
  }
}