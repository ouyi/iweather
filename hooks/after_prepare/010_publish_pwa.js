#!/usr/bin/env node

// based on http://thebrockellis.com/2017/05/05/Using-Github-Pages-To-Host-Ionic-Automatically

var shell = require('child_process').execSync;
var fs = require('fs');
var path = require('path');

const src = 'www';
const dest = 'docs';

console.log(`Copying ${src}/* to ${dest}/ ...`);
shell(`mkdir -p ${dest}`);
shell(`cp -r ${src}/* ${dest}`);
console.log('Done.');
