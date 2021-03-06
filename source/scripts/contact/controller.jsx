var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('lodash');
var React = require('react');

var Collection = require('./collection');
var Model = require('./model');
var CardList = require('./components').cardList;
var CardForm = require('./components').cardForm;

var contacts = new Collection();

Backbone.$ = $;

module.exports = Backbone.View.extend({
  collection: contacts,

  initialize: function () {
    var _this = this;

    if (typeof window.contacts === 'undefined') {
      this.collection.fetch({
        success: _.bind(_this.renderList, _this)
      }).then(function () {
          console.log('fetch ran');
        }
      );
    } else {
      this.collection.set(window.contacts);
    }

    this.listenTo(this.collection, 'add', this.renderList);

    this.render();
  },

  render: function () {
    this.renderList();
    this.renderCardForm();
    return this;
  },

  onCardSubmit: function (formData) {
    console.log('collection', this.collection);
    var _this = this;
    var contact = new Model(formData);
    contact.save(null, {
      success: function (model, repsonse) {
        contacts.add([contact]);
      },
      error:  function (model, repsonse) {
        console.log('error');
      }
    }).always(function () {
      console.log('save ran');
    });
  },

  renderCardForm: function () {
    React.render(
      <CardForm csrf={window.csrf} onCardSubmit={this.onCardSubmit} />,
      document.getElementById('card-form')
    );
  },

  renderList: function () {
    React.render(
      <CardList contacts={this.collection.toJSON()} />,
      document.getElementById('card-list')
    );
  }
});
