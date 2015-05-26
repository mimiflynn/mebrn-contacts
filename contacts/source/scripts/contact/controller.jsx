var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var _ = require('lodash');
var React = require('react');

var Collection = require('./collection');
var Model = require('./model');
var CardList = require('./components').cardList;
var CardForm = require('./components').cardForm;

module.exports = Backbone.View.extend({
  collection: new Collection(),

  initialize: function () {
    var _this = this;

    this.collection.fetch({
      success: _.bind(_this.renderList, _this)
    }).then(function () {
        console.log('fetch ran');
      }
    );

    this.listenTo(this.collection, 'add', this.renderList);

    this.render();
  },

  render: function () {
    if (document.getElementById('content')) {
      this.renderList();
    }
    if (document.getElementById('newCard')) {
      this.renderCardForm();
    }
    return this;
  },

  renderCardForm: function () {
    var data = {
      csrf: window.csrf
    }
    var form = React.render(React.createElement(CardForm, data), document.getElementById('newCard'));
    React.findDOMNode(form).addEventListener('cardSubmit', _.bind(this.onCardSubmit, this));
  },

  renderList: function () {
    var data = {
      contacts: this.collection.toJSON()
    };
    React.render(React.createElement(CardList, data), document.getElementById('content'));
  },

  onCardSubmit: function (e) {
    console.log('saving to collection');
    var _this = this;
    var formData = e.detail;
    var contact = new Model(formData);
    contact.save(null, {
      success: function (model, repsonse) {
        _this.collection.add([contact]);
      },
      error:  function (model, repsonse) {
        console.log('error');
      }
    }).always(function () {
      console.log('save ran');
    });
  }
});
