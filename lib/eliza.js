var Session = require('./session');

function Eliza (defaults) {
  this.defaults = defaults;
}

Eliza.prototype.session = function () {
  return new Session(this.defaults);
};

module.exports = Eliza;
