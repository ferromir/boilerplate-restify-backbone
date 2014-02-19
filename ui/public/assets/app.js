App.Views.Home = Backbone.View.extend({
  el: 'body',
  template: JST['templates/home.jst'],

  render: function(){
    this.$el.html(this.template());
    return this;
  }
});
App.Router = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function() {
    this.homeView = this.homeView || new App.Views.Home();
    this.homeView.render();
  }
});

new App.Router();
Backbone.history.start();