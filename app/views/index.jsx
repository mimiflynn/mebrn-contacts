var React = require('react');

var DefaultLayout = require('./layouts/default');

var CardList = require('./contacts/card-list.jsx');
var CardForm = require('./contacts/card-form.jsx');

var IndexLayout = React.createClass({
  render: function () {

    var cardList = React.renderToString(<CardList contacts={this.props.contacts} />),
      cardForm = React.renderToString(<CardForm csrf={this.props.csrf_token} />),
      _csrf = 'window.csrf = "' + this.props.csrf_token + '"';

    return (
      <DefaultLayout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <div id="card-list" dangerouslySetInnerHTML={{__html: cardList}} />
        <div id="card-form" dangerouslySetInnerHTML={{__html: cardForm}} />
        <script src="/js/app.js"></script>
        <script dangerouslySetInnerHTML={{__html: _csrf}} />
      </DefaultLayout>
    );
  }
});

module.exports = IndexLayout;
