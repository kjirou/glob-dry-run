#!/usr/bin/env node

const minimist = require("minimist");
const {getPaths} = require(".");

const argv = minimist(process.argv.slice(2));
const globPattern = argv._[0];

getPaths(globPattern, {}, (filePaths) => {
  const output = filePaths.join('\n');
  console.log(output);
});
