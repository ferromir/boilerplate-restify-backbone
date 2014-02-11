App.Views.Home = Backbone.View.extend({
  el: 'body',
  template: JST['templates/home.jst'],

  render: function(){
    this.$el.html(this.template());
    return this;
  }
});