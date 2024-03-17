'use strict';

const log = require('log-electron');

log.notice('log from a renderer process');

if (window.location.href.includes('test=true')) {
  setTimeout(() => window.close(), 50);
}
