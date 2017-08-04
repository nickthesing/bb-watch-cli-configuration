#!/usr/bin/env node

// bb-watch-cli example with custom configuration
let watcher = require('../bb-watch/dist').default;
watcher({
	notifications: false
});