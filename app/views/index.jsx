var React = require('react');

var DefaultLayout = require('./layouts/default');

var IndexLayout = React.createClass({
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>{this.props.title}</h1>
      </DefaultLayout>
    );
  }
});

module.exports = IndexLayout;
