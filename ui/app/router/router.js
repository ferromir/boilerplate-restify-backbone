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