var $ = require('jquery');
var Backbone = require('backbone');

window.$ = $;
Backbone.$ = $;

var ListContacts = require('./contact/controller.jsx');

$(document).ready(function () {
  'use strict';
  new ListContacts();
});
