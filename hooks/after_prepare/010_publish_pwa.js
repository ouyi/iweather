#!/usr/bin/env node

// based on http://thebrockellis.com/2017/05/05/Using-Github-Pages-To-Host-Ionic-Automatically

var shell = require('child_process').execSync;
var fs = require('fs');
var path = require('path');

const src = 'www';
const dest = 'docs';

shell(`mkdir -p ${dest}`);
shell(`cp -r ${src}/* ${dest}`);

const indexFileSrc = `${src}/index.html`;
const indexFileDest = `${dest}/index.html`;

fs.readFile(indexFileSrc, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/<script src="cordova.js"><\/script>/g, match => `<!--${match}-->`);

  fs.writeFile(indexFileDest, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
