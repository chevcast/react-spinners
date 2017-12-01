var path = require('path')

const PATHS = {
  src: path.join(__dirname, './src'),
  build: path.join(__dirname, './dist')
}

module.exports = {

  entry: PATHS.src + '/index.ts',
  output: {
    path: PATHS.build,
    filename: 'index.js',
    library: "reactSpinners",
    libraryTarget: "umd"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }
    ],
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  externals: {
    'react': 'commonjs react'
  }
}