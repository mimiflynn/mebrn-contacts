var React = require('react');

var DefaultLayout = require('./layouts/default');

var CardList = require('./contacts/card-list.jsx');

var ContactsLayout = React.createClass({
  render: function () {
    var _csrf = 'window.csrf = "' + this.props.csrf_token + '"';
    return (
      <DefaultLayout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <div id="content"/>
        <div id="newCard"/>
        <script src="/js/app.js"></script>
        <script dangerouslySetInnerHTML={{__html: _csrf}} />
      </DefaultLayout>
    );
  }
});

module.exports = ContactsLayout;
