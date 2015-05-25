var contacts = require('../controllers/contacts').index;

exports.index = function (req, res) {
  contacts(req, res)
};
