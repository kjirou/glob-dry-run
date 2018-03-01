#!/usr/bin/env node

const minimist = require("minimist");
const {getFilePaths} = require(".");

const argv = minimist(process.argv.slice(2));
const [engineId, globPattern] = argv._;

getFilePaths(engineId, globPattern, {}, (filePaths) => {
  const output = filePaths.join('\n');
  console.log(output);
});
