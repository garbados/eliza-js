var Eliza = require('..');
if (process.env.COVERAGE)
  Eliza = require('../cov-lib');

describe('lizbeth', function () {
  describe('session', function () {
    beforeEach(function () {
      var messages = [];
      this.bot = new Eliza();
      this.stdin = null; // TODO
      this.session = this.bot.session({
        input: this.stdin
      });
    });

    it.skip('should prompt until an exit word', function (done) {
      this.session.on('quit', done);
      this.stdin.write('hello');
      this.stdin.write('i am depressed');
      this.stdin.write('help me robot');
      this.stdin.write('bye');
    });
  });
});
