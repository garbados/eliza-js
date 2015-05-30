# Lizbeth

A CLI and `require`-able library for using the [Robotic Rogerian Therapist, ELIZA](http://en.wikipedia.org/wiki/ELIZA).

## As a CLI

To install, use [npm](https://npmjs.com) and, in your terminal, type:

    npm install -g lizbeth

Then, you're ready to administer robotic therapy:

	lizbeth
	> Eliza: How do you do.  Please tell me your problem.
	> You: _

You type directly into your terminal to speak with Eliza. Hit enter to tell her what's on your mind.

To stop a session, just type `bye`, `goodbye`, `done`, `exit`, or `quit`.

## As JS

	var Eliza = require('lizbeth');
	var bot = new Eliza();

    // begin reading using input from stdin 
    // and piping replies to stdout
	var session = bot.session();

    // event occurs when user says something
	session.on('user', function (msg) {
	  // what the user said, and other metadata
	});

    // event occurs when eliza replies
    session.on('eliza', function (msg) {
      // what eliza said, and other metadata
    });

    // event occurs when the session ends
    session.on('quit', function () { ... });

    // print a list of every message so far sent and received
    // in order, including associated metadata
    console.log(session.messages);

    // halts waiting on stdin for a reply
    // and quits the session without user input
    session.quit();

### Reference

* Eliza
* Eliza.session
* Session
* Session.on('user', function (msg) { ... })
* Session.on('eliza', function (msg) { ... })
* Session.on('quit', function () { ... })
* Session.quit
* Session.messages
* Message

This section is way TODO, yo.

## Testing

    git clone https://github.com/garbados/eliza-js.git
    cd eliza-js
    npm install
    npm test

## Why 'Lizbeth'?

Because it was the first formulation of "eliza" that wasn't already taken in NPM :P

## License

This project is based on and adapted from code found [here](http://www.masswerk.at/elizabot/). This is its license (or something like it):

	elizabot.js v.1.1 - ELIZA JS library (N.Landsteiner 2005)
	Eliza is a mock Rogerian psychotherapist.
	Original program by Joseph Weizenbaum in MAD-SLIP for "Project MAC" at MIT.
	cf: Weizenbaum, Joseph "ELIZA - A Computer Program For the Study of Natural Language
	  Communication Between Man and Machine"
	  in: Communications of the ACM; Volume 9 , Issue 1 (January 1966): p 36-45.
	JavaScript implementation by Norbert Landsteiner 2005; <http://www.masserk.at>

In the source code, any files without that header, any code above that disclaimer, or anything else I wrote, I release under the [ISC](http://en.wikipedia.org/wiki/ISC_license) license.
