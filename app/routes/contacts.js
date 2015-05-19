'use strict';

// contacts routes use contact controller
var contacts = require('../controllers/contact');

module.exports = function (app, auth) {

  app.route('/contact')
    .get(contacts.all)
    .post(contacts.create);

  app.route('/contact/:contactId')
    .get(auth.isMongoId, auth.requiresLogin, contacts.show)
    .put(auth.isMongoId, auth.requiresLogin, contacts.update)
    .delete(auth.isMongoId, auth.requiresLogin, contacts.destroy);

  // Finish with setting up the contactId param
  app.param('contactId', contacts.contact);

};
