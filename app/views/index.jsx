var React = require('react');

var DefaultLayout = require('./layouts/default');

var CardList = require('./contacts/card-list.jsx');

var IndexLayout = React.createClass({
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <CardList contacts={this.props.contacts}/>
      </DefaultLayout>
    );
  }
});

module.exports = IndexLayout;
