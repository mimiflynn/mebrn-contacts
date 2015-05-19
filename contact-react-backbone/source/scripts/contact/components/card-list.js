var React = require('react');
var Card = require('./card');

module.exports = React.createClass({
  render: function () {
    var cards = this.props.contacts.map(function (contact, index) {
      return (
        <li><Card data={contact} key={index}/></li>
      );
    });
    return (
      <ul className="cardList">
        {cards}
      </ul>
    );
  }
});
