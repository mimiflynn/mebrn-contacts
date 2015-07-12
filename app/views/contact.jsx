var React = require('react');

var DefaultLayout = require('./layouts/default');

var CardList = require('./contacts/card-list.jsx');

var ContactsLayout = React.createClass({
  render: function () {
    var _csrf = 'window.csrf = "' + this.props.csrf_token + '"';
    return (
      <DefaultLayout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p>For server side rendering go <a href="/">here</a>.</p>
        <div id="card-form" />
        <div id="card-list" />
        <script src="/js/app.js"></script>
        <script dangerouslySetInnerHTML={{__html: _csrf}} />
      </DefaultLayout>
    );
  }
});

module.exports = ContactsLayout;
