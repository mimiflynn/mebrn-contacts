var React = require('react');
var Card = require('./card.jsx');

module.exports = React.createClass({
  propTypes: {
    contacts: React.PropTypes.array
  },

  render: function () {
    var cards = this.props.contacts.map(function (contact, index) {
      return (
        <li key={contact._id}><Card data={contact}/></li>
      );
    });
    return (
      <ul className="cardList">
        {cards}
      </ul>
    );
  }
});
