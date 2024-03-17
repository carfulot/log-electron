'use strict';

const { contextBridge } = require('electron');
require('../../src/renderer/log-electron-preload');
const log = require('../..');

contextBridge.exposeInMainWorld('log', log.functions);
