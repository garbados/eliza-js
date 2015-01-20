var ElizaBot = require('../src/elizabot');
var EventEmitter = require('events').EventEmitter;
var prompt = require('prompt');
var async = require('async');
var util = require('util');

function Session (opts) {
  // TODO do something with opts
  this.eliza = new ElizaBot();
  this.messages = [];
  this.quit = false;

  var self = this;
  prompt.start();
  prompt.message = '';
  prompt.delimiter = '';

  this.on('quit', function () {
    self.quit = true;
  });

  self._print(self.eliza.getInitial());
  
  async.whilst(function () {
    return !self.quit;
  }, function (done) {
    prompt.get({
      properties: {
        input: {
          description: 'You:'
        }
      }
    }, function (err, result) {
      if (err) done(err);
      var msg = result.input;
      var reply = self.eliza.transform(msg);
      var message = {
        id: self.messages.length,
        text: msg,
        reply: reply
      };

      self._print(reply);

      self.emit('user', msg);
      self.emit('eliza', reply);

      self.messages.push(message);
      self.quit = self.eliza.quit;
      done();
    });
  }, function (err) {
    if (err) console.error(err);
  });
}

util.inherits(Session, EventEmitter);

Session.prototype._print = function (msg) {
  console.log(['Eliza', msg].join(': '));
}

Session.prototype.quit = function () {
  var goodbye = self.eliza.getFinal();
  self._print(goodbye);
  self.emit('quit');
};

module.exports = Session;
