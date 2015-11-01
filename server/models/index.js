var db = require('../db');




module.exports = {

  messages: {
    // Retrieves all messages FROM 'messages' table.
    get: function (callback) {
      db.dbConnection.query('SELECT user, message, room FROM messages', function (error, results, fields) {
        if (error){throw error};

        callback(results);

        // Implement fields argument at future time.
      });
    },

    // Insert a message into the 'messages' table.
    post: function (queryArgs) {
      db.dbConnection.query('INSERT INTO messages SET ?', queryArgs, function (error, results, fields) {
        if (error){throw error};

        // Implement fields argument at future time.
      });
    }
  },

  users: {
    // Retrieves all messages FROM 'users' table.
    get: function (callback) {
      db.dbConnection.query('SELECT * user FROM users, queryArgs',  function (error, results, fields) {
        if (error){throw error};

        callback(results);

        // Implement fields argument at future time.
      });
    },
    // INSERT a message INTO 'users' table
    post: function (queryArgs) {
      db.dbConnection.query('INSERT INTO users SET ?', queryArgs, function (error, results, fields) {
        if (error){throw error};

        // Implement fields argument at future time.
      });
    }
  }
};


// INSERT INTO employee
//   (first, last, age, address, city, state)
//   values ('Luke', 'Duke', 45, '2130 Boars Nest',
//           'Hazard Co', 'Georgia');

// connection.query('INSERT INTO posts SET ?', {title: 'test'}, function(err, result) {
//   if (err) throw err;

//   console.log(result.insertId);
// });

