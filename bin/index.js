#!/usr/bin/env node

var pkg = require('../package.json');
var Eliza = require('..');
var prompt = require('prompt');
var bot = new Eliza();
var argv = require('yargs')
  .version(pkg.version)
  .argv;
var session = bot.session();
