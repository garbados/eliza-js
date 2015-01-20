var Session = require('./session');
var IRC = require('./irc');

function Eliza () { }

Eliza.prototype.session = function (opts) {
  return new Session(opts);
};

Eliza.prototype.irc = function (host, nick, opts) {
  return new IRC(host, nick, opts);
};

module.exports = Eliza;
