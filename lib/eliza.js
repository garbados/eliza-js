var Session = require('./session');

function Eliza () { }

Eliza.prototype.session = function (opts) {
  return new Session(opts);
};

module.exports = Eliza;
