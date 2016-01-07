var db = require('../db');




module.exports = {

  messages: {
    // Retrieves all messages FROM 'messages' table.
    get: function (callback) {
      db.dbConnection.query('SELECT user, message, room FROM messages', function (error, results, fields) {
        if (error){throw error};

        callback(results);

      });
    },

    // Insert a message into the 'messages' table.
    post: function (queryArgs) {
      db.dbConnection.query('INSERT INTO messages SET ?', queryArgs, function (error, results, fields) {
        if (error){throw error};
      });
    }
  },

  users: {
    // Retrieves all messages FROM 'users' table.
    get: function (callback) {
      db.dbConnection.query('SELECT * user FROM users, queryArgs',  function (error, results, fields) {
        if (error){throw error};

        callback(results);

      });
    },
    // INSERT a message INTO 'users' table
    post: function (queryArgs) {
      db.dbConnection.query('INSERT INTO users SET ?', queryArgs, function (error, results, fields) {
        if (error){throw error};

      });
    }
  }
};