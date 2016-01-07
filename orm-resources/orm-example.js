var Sequelize = require("sequelize");
var sequelize = new Sequelize("chatter", "root", "");

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

var Message = sequelize.define('Message' {
  userid: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.sync().success(function() {

  var newUser = User.build({username: "Jean Valjean"});
  newUser.save().success(function() {

    User.findAll({ where: {username: "Jean Valjean"} }).success(function(usrs) {

      for (var i = 0; i < usrs.length; i++) {
        console.log(usrs[i].username + " exists");
      }
    });
  });
});
