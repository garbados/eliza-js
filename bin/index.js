#!/usr/bin/env node

var pkg = require('../package.json');
var Eliza = require('..');
var prompt = require('prompt');
var bot = new Eliza();

var yargs = require('yargs')
  .version(pkg.version);
var argv = yargs.argv;

if (argv.irc) {
  prompt.override = argv;
  prompt.start(['host', 'nick'], function (err, result) {
    bot.irc(result.host, result.nick, argv);
  });
} else {
  var session = bot.session();
}
