var React = require('react');

var DefaultLayout = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
