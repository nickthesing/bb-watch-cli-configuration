# bb-watch-cli-configuration
CLI tool with configuration for Backbase watcher

----------

## Pre usage

Clone [bb-watch](https://www.github.com/nickthesing/bb-watch) into a folder somewhere.

## Usage

Clone, fork or download this repo at the same level of bb-watch. Make changes to the index.js file, add your own configuration or do other stuff. 

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
	portalContext: string // (default: portalserver) portalcontext for bb-import
});
```

## After customizations

Use npm link to make the bb-watch global available. 

	$ npm link 
	
Go to folder where you want to watch for file changes.

	$ bb-watch
