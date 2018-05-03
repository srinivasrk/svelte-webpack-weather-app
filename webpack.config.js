const path = require('path');

const config = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.html']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      },
      {
        use:'babel-loader',
        test: /\.js$/
      }
    ]
  }
}

module.exports = config;
