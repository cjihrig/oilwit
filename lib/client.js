var Call = require('./call');
var Message = require('./message');
var defaults = {
  host: 'api.twilio.com',
  version: '2010-04-01'
};


function Client(options) {
  this.accountSid = options.accountSid;
  this.authToken = options.authToken;
  this.host = defaults.host;
  this.version = defaults.version;
  this.url = 'https://' + this.accountSid + ':' + this.authToken + '@' +
             this.host + '/' + this.version;
  this.call = new Call(this);
  this.message = new Message(this);
}

module.exports = Client;
