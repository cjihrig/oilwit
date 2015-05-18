var Api = require('./api');


function Message(client) {
  this.client = client;
}

module.exports = Message;


Message.prototype.create = function(options, callback) {
  var client = this.client;
  var url = client.url + '/Accounts/' + client.accountSid + '/Messages.json';
  var payload = options.payload;
  var servicePayload = {
    To: payload.to,
    From: payload.from,
    Body: payload.body
  };

  Api.post({
    url: url,
    payload: servicePayload
  }, callback);
};
