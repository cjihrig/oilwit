var Api = require('./api');


function Call(client) {
  this.client = client;
}

module.exports = Call;


Call.prototype.create = function(options, callback) {
  var client = this.client;
  var url = client.url + '/Accounts/' + client.accountSid + '/Calls.json';
  var payload = options.payload;
  var servicePayload = {
    To: payload.to,
    From: payload.from,
    Url: payload.url
  };

  Api.post({
    url: url,
    payload: servicePayload
  }, callback);
};
