var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  defaults: {
    firstName: 'First',
    lastName: 'Last',
    address: '123 Somewhere Street',
    city: 'Anyplace',
    state: 'ST',
    country: 'Country',
    zip: '12345',
    phone: '123 456 7890',
    email: 'name@domainname.com'
  },

  url: 'http://localhost:4000/contact',

  initialize: function () {

  }
});