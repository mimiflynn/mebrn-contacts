var React = require('react');

var DefaultLayout = require('./layouts/default');

var CardList = require('./contacts/card-list.jsx');

var ContactsLayout = React.createClass({
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <div id="content"/>
        <div id="newCard"/>
        <script src="/js/app.js"></script>
      </DefaultLayout>
    );
  }
});

module.exports = ContactsLayout;
