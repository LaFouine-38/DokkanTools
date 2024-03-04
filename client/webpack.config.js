const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults"
              }],
              '@babel/preset-react'
            ]
          }
        }],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/i,
        include: path.resolve(__dirname, 'src/assets'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',  // Utilisez [name].[ext] pour conserver les noms de fichiers d'origine
              outputPath: 'build/assets',  // Utilisez 'assets' comme chemin de sortie
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx'],
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc"
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './styles/[name].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "assets" }
      ]
    })
  ],
  devServer: {
    static: [
      { directory: path.join(__dirname, 'src/assets'), publicPath: "/assets" },
      { directory: path.join(__dirname, 'src/styles'), publicPath: "/styles" }
    ],
    compress: true,
    port: 8000,
  }
};
