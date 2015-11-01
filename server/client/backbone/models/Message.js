var Message = Backbone.Model.extend({

  url : 'http://127.0.0.1:20000/classes/messages',

  defaults: {
    username: '',
    text: ''
  }
});
