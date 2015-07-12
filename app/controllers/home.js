var mongoose = require('mongoose'),
  Contact = mongoose.model('Contact'),
  _ = require('lodash');

exports.serverside = function (req, res) {
  Contact.find().sort('-created').populate('user', 'name username').exec(function (err, contact) {
    res.render('index', {
      title: 'Server Side Rendering',
      contacts: contact
    })
  });
};

exports.clientside = function (req, res) {
  res.render('contact', {
    title: 'Client Side Rendering'
  })
};
