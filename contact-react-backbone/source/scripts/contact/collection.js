var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var model = require('./model.js');

module.exports = Backbone.Collection.extend({
  model: model,
  url: 'http://localhost:4000/contact'
});
