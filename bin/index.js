#!/usr/bin/env node

var pkg = require('../package.json');
var program = require('commander');
var Eliza = require('..');

program
.version(pkg.version)
.parse(process.argv);

var bot = new Eliza();
var session = bot.session();
