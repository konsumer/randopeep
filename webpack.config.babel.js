import { DefinePlugin } from 'webpack'
import { resolve } from 'path'

const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    randopeep: [
      './src/index.js',
      'webpack/hot/only-dev-server'
    ]
  },
  output: {
    path: resolve(__dirname, './build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/i, exclude: /(node_modules)/, loader: 'babel-loader' },
      { test: /\.json$/i, exclude: /(node_modules)/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}

export default config
