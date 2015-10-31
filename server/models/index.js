var db = require('../db');




module.exports = {
  messages: {
    // Retrieves all messages from 'messages' table.
    get: function (query, queryArgs, callback) {
      db.dbConnection.query(query, queryArgs, function (error, results, fields) {
        if (error){throw error};

        callback(results);

        // Implement fields argument at future time.
      });
    },

    // Insert a message into the 'messages' table.
    post: function (query, queryArgs) {
      db.dbConnection.query(query, queryArgs, function (error, results, fields) {
        if (error){throw error};

        // Implement fields argument at future time.
      });
    }
  },

  users: {
    // Retrieves all messages from 'users' table.
    get: function (query, queryArgs, callback) {
      db.dbConnection.query(query, queryArgs,  function (error, results, fields) {
        if (error){throw error};

        callback(results);

        // Implement fields argument at future time.
      });
    },
    // Insert a message into 'users' table
    post: function (query, queryArgs) {
      db.dbConnection.query(query, queryArgs, function (error, results, fields) {
        if (error){throw error};

        // Implement fields argument at future time.
      });
    }
  }
};


// insert into employee
//   (first, last, age, address, city, state)
//   values ('Luke', 'Duke', 45, '2130 Boars Nest',
//           'Hazard Co', 'Georgia');

