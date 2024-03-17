'use strict';

const log = require('log-electron');

log.info('log from renderer');

if (window.location.href.includes('test=true')) {
  setTimeout(() => window.close(), 50);
}
