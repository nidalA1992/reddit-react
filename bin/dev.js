const webpack = require('webpack');
const [ webpackClientConfig, webpackServerConfig ] = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');

const serverCompiler = webpack(webpackServerConfig); //создаем серверный компайлер
const clientCompiler = webpack(webpackClientConfig); //создаем клиентский компайлер

const hmrServer = express(); // создаем сервер

hmrServer.use(webpackDevMiddleware(clientCompiler, {
  publicPath: webpackClientConfig.output.publicPath,
  serverSideRender: true,
  writeToDisk: true,
}));

hmrServer.use(webpackHotMiddleware(clientCompiler, {
  path: '/static/__webpack_hmr',
}));

hmrServer.listen(4001, () => {
  console.log('HMR server succesfuly started');
});

serverCompiler.run((err) => {    // холодный старт
  if (err) {
    console.log('Compilation failed: ', err);
  }
  
  serverCompiler.watch({}, (err) => { // если не возникло ошибок запускаем компайлер в режиме watch
    if (err) {
      console.log('Compilation failed: ', err);
    }
    console.log('Compilation was succesfully');
  });

  nodemon({ 
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/client'),
    ]
  });
});
