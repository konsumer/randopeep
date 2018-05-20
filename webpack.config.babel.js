const libraryName = 'randopeep'
const outputFile = libraryName + '.js'

export default {
  entry: `${__dirname}/src/index.js`,
  devtool: 'source-map',
  output: {
    path: `${__dirname}/test`,
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js|\.json)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
