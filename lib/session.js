var ElizaBot = require('../src/elizabot');
var EventEmitter = require('events').EventEmitter;
var readline = require('readline');
var async = require('async');
var util = require('util');

function Session (opts) {
  var self = this;
  opts = opts || {};
  this.rl = readline.createInterface({
    input: opts.input || process.stdin,
    output: opts.output || process.stdout
  });
  this.rl.setPrompt('User: ');
  this.eliza = new ElizaBot();
  this.messages = [];
  this.quit = false;

  this.on('quit', function () {
    self.quit = true;
  });

  self._print(self.eliza.getInitial());
  
  async.whilst(function () {
    return !self.quit;
  }, function (done) {
    self.rl.question('User: ', function (msg) {
      var reply = self.eliza.transform(msg);
      var message = {
        id: self.messages.length,
        text: msg,
        reply: reply
      };

      self._print(reply);

      self.emit('user', msg);

      self.messages.push(message);
      self.quit = self.eliza.quit;
      done();
    });
  }, function (err) {
    if (err) console.error(err);
    self.rl.close();
  });
}

util.inherits(Session, EventEmitter);

Session.prototype._print = function (msg) {
  this.emit('eliza', msg);  
  this.rl.write(['Eliza', msg].join(': ')+'\n');
};

Session.prototype.quit = function () {
  var goodbye = self.eliza.getFinal();
  self._print(goodbye);
  self.emit('quit');
};

module.exports = Session;
