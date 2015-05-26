var React = require('react');

var DefaultLayout = require('./layouts/default');

var CardList = require('./contacts/card-list.jsx');
var CardForm = require('./contacts/card-form.jsx');

var IndexLayout = React.createClass({
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <CardList contacts={this.props.contacts}/>
        <CardForm csrf={this.props.csrf_token}/>
        <script src="/js/app.js"></script>
      </DefaultLayout>
    );
  }
});

module.exports = IndexLayout;
