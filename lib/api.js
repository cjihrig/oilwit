var Querystring = require('querystring');
var Boom = require('boom');
var Hoek = require('hoek');
var Wreck = require('wreck');
var defaultGetHeaders = {
  'Accept': 'application/json',
  'Accept-Charset': 'utf-8',
  'User-Agent': 'twilio-node/2.2.0'
};
var defaultRequestHeaders = Hoek.applyToDefaults(defaultGetHeaders, {
  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
});


module.exports.post = function post(options, callback) {
  Wreck.post(options.url, {
    json: 'force',
    headers: defaultRequestHeaders,
    payload: Querystring.stringify(options.payload)
  }, handleResponse(callback));
};


function handleResponse(callback) {
  return function handleResponse(err, response, payload) {
    if (err) {
      return callback(err);
    }

    // Is this the best way to detect an error?
    if (payload.code) {
      var error = Boom.create(payload.status, payload.message, {
        code: payload.code
      });

      return callback(error);
    }

    callback(null, payload);
  };
}
