var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var ListContacts = require('./contact/controller.js');

$(document).ready(function () {
  'use strict';
  new ListContacts();
});
