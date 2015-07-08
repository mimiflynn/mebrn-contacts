var React = require('react');
var LinkedStateMixin = require('react/lib/LinkedStateMixin');


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
    LinkedStateMixin
  ],

  getInitialState: function () {
    return {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      phone: '',
      email: '',
      _csrf: this.props.csrf,
      formSent: false
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    console.log('form data: ', this.state);
    this.props.onCardSubmit(e);
    this.onFormSubmit(this.state);
  },

  onFormSubmit: function (data) {
    console.log('about to send event:', data);
    console.log('this: ', this);
    this.setState({
      formSent: true
    });
  },

  render: function () {
    var formSent = this.state.formSent;
    return (
      <form className="cardForm" onSubmit={this.handleSubmit}>
        <div style={{display: formSent ? 'block' : 'none'}}>Sent!</div>
        <input type="hidden" name="_csrf" valueLink={this.linkState('_csrf')}/>
        <input type="text" placeholder="First" name="firstName" valueLink={this.linkState('firstName')}/>
        <input type="text" placeholder="Last" name="lastName" valueLink={this.linkState('lastName')}/>
        <input type="text" placeholder="Street Address" name="address" valueLink={this.linkState('address')}/>
        <input type="text" placeholder="City" name="city" valueLink={this.linkState('city')}/>
        <input type="text" placeholder="State" name="state" valueLink={this.linkState('state')}/>
        <input type="text" placeholder="Zip" name="zip" valueLink={this.linkState('zip')}/>
        <input type="text" placeholder="Country" name="country" valueLink={this.linkState('country')}/>
        <input type="text" placeholder="Phone" name="phone" valueLink={this.linkState('phone')}/>
        <input type="text" placeholder="Email" name="email" valueLink={this.linkState('email')}/>
        <input type="submit" value="Save"/>
      </form>
    );
  }
});
