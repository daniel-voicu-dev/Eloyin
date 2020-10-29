const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(common, {
  mode: 'development',
  // watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    // contentBase: './dist',
    // port: 9000
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [           
           'style-loader',
           'css-loader',                    
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
              // sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: '[name].bundle.css',
    //   chunkFilename: '[id].css',
    // }),
  ],

});