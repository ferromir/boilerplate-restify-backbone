this["JST"] = this["JST"] || {};

this["JST"]["app/templates/home.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="navbar navbar-default navbar-fixed-top">\n  <div class="container">\n    <div class="navbar-header">\n      <a href="/" class="navbar-brand">Boilerplate-Restify-Backbone</a>\n    </div>\n    <div class="navbar-collapse collapse" id="navbar-main">\n      <ul class="nav navbar-nav">\n        <li>\n          <a href="/blog">Blog</a>\n        </li>\n        <li>\n          <a href="/contact">Contact</a>\n        </li>\n        <li>\n          <a href="/about_us">About Us</a>\n        </li>\n        <li>\n          <a href="/faq">FAQ</a>\n        </li>\n      </ul>\n      <ul class="nav navbar-nav navbar-right">\n        <li>\n          <a href="/login">Login</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>';

}
return __p
};