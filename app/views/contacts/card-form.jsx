var React = require('react');
var formHelper = require('../helpers/form-helper.js');

/* CardForm
  upon submit will fire a JS CustomEvent() of 'cardSubmit' loaded with data
  be sure to add an event listener like so:

  React.findDOMNode(form).addEventListener('cardSubmit', callback)
  var callback = function (e) {
    // the data is in the detail
    console.log('cardSubmit fired: ', e.detail);
  }
*/

module.exports = React.createClass({
  mixins: [
    formHelper
  ],

  handleSubmit: function (e) {
    this.handleSubmitHelper(e);
  },

  getInitialState: function () {
    return {
      formSent: false
    };
  },

  onFormSubmit: function (data) {
    var event = new CustomEvent('cardSubmit', {detail: data}, false);
    React.findDOMNode(this).dispatchEvent(event);
    this.setState({
      formSent: true
    });
  },

  render: function () {
    var formSent = this.state.formSent;
    return (
      <form className="cardForm" onSubmit={this.handleSubmit}>
        <div style={{display: formSent ? 'block' : 'none'}}>Sent!</div>
        <input type="hidden" ref="_csrf" value={window.contactsToken}/>
        <input type="text" placeholder="First" ref="firstName"/>
        <input type="text" placeholder="Last" ref="lastName"/>
        <input type="text" placeholder="Street Address" ref="address"/>
        <input type="text" placeholder="City" ref="city"/>
        <input type="text" placeholder="State" ref="state"/>
        <input type="text" placeholder="Zip" ref="zip"/>
        <input type="text" placeholder="Country" ref="country"/>
        <input type="text" placeholder="Phone" ref="phone"/>
        <input type="text" placeholder="Email" ref="email"/>
        <input type="submit" value="Save"/>
      </form>
    );
  }
});
