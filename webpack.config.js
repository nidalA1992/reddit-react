const clientConfig = require('./cfg/webpack.client.config');
const serverConfig = require('./cfg/webpack.server.config');

module.exports = [ // если module exports не объект, а массив. webpack генерит поочериди соответсвующие бандлы
  clientConfig, 
  serverConfig
];
