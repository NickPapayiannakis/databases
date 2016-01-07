var models = require('../models');
var bluebird = require('bluebird');


var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
  'Content-Type': "application/json"
};

var sendResponse = function(res, statusCode, data) {
  res.writeHead(statusCode, headers);
  res.end(data);
};


module.exports = {

  messages: {

    get: function (req, res) {
       models.messages.get(function(data) {
        console.log(JSON.stringify(data));
        sendResponse(res, 200, JSON.stringify(data));
      });
    },
    // Insert a message into the 'messages' table.
    post: function (req, res) {
      models.messages.post({user: req.body.username, message: req.body.message, room: req.body.room});
      sendResponse(res, 301);
    }
  },

  users: {

    get: function (req, res) {
       models.messages.get( function(data) {
        sendResponse(res, 200, JSON.stringify(data));
      });
    },
    // Insert a message into the 'users' table.
    post: function (req, res) {
      models.users.post({user: req.body.username});
      sendResponse(res, 301);
    }
  }
};

