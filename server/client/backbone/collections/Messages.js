var Messages = Backbone.Collection.extend({

  model: Message,
  url : 'http://127.0.0.1:20000/classes/messages',

  load: function(){
    this.fetch();
  },

  parse: function(response, options) {
    return response;
  }
});

//{data: {order: '-createdAt'}}