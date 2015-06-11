var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('lodash');
var React = require('react');

var Collection = require('./collection');
var Model = require('./model');
var CardList = require('./components').cardList;
var CardForm = require('./components').cardForm;

Backbone.$ = $;

module.exports = Backbone.View.extend({
  collection: new Collection(),

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

    document.addEventListener('cardSubmit', _.bind(this.onCardSubmit, this));

    return this;
  },

  renderCardForm: function () {
    React.render(
      <CardForm csrf={window.csrf} />,
      document.getElementById('card-form')
    );
  },

  renderList: function () {
    React.render(
      <CardList contacts={this.collection.toJSON()} />,
      document.getElementById('card-list')
    );
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
