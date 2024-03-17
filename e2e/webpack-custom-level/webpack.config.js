'use strict';

const path = require('path');

module.exports = [
  {
    mode: 'development',
    devtool: false,
    entry: ['./main.js'],
    output: { filename: 'main.js' },
    target: 'electron-main',
    resolve: {
      alias: {
        'log-electron': path.resolve('../..'),
      },
    },
    stats: 'minimal',
  },
  {
    mode: 'development',
    devtool: false,
    entry: ['./renderer.js'],
    output: { filename: 'renderer.js' },
    target: 'electron-renderer',
    resolve: {
      alias: {
        'log-electron': path.resolve('../..'),
      },
    },
    stats: 'minimal',
  },
];
