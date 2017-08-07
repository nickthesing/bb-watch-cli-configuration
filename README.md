# bb-watch-cli-configuration
CLI tool with configuration for Backbase watcher

----------

## Example

```javascript
//import 
let watcher = require('../bb-watch/dist').default;

// init
watcher({
	notifications: boolean, // (default: true) enable/disable notifications
	packageName: string // (default: 'package.zip') specify package name
	excludeExtentions: array // (default '.zip') excludes extentions for watcher, zip is required!
	port: number // (default: 7777) port number for portal on localhost
});
```
