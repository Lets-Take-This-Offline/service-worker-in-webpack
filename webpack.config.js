const path = require('path');

const ClientConfig = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

const ServiceWorkerConfig = {
    target: 'webworker',
    mode: 'development',
    entry: './serviceworker.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'serviceworker.js'
    }
};

module.exports = [ ClientConfig, ServiceWorkerConfig ];