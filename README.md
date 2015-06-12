# Contacts

This started off as a MEAN.io contacts app, but I wanted to learn how to use Backbone and React together and here we are now.

# Contacts App made with React and Backbone

## POC

Goal is to exhibit that:
- Backbone for models and collections
- React for views and controllers
- Server side rendering using the same code on the client and server.

## Requirements

```
gem install compass
brew install mongodb
npm install -g grunt-cli
npm install -g browserify
```

Be sure mongoDB is running. If you're on a Mac (as I assumed with the `brew` command) there is a preference pane to start mongoDB [here](http://blog.mongodb.org/post/28925264384/macosx-preferences-pane-for-mongodb).

## Development

Run `npm install` from this directory and and `npm start` to start the server. Open a new terminal tab and run `grunt` for initial build then `grunt watch` to watch for changes.

## Approach

Attempting to make the components independent of the framework, so, in this case, no Backbone code in the components.

This will allow the components to work on their own and can be available to teams needing the component's functionality but using a framework that better suites their needs.

## To Do
- refactor to a Flux like organizational structure
- add CRS

# Boilerplate Info

This app was built using the [node express and mongoose boilerplate.](https://github.com/madhums/node-express-mongoose) [This is an example app using the boilderplate.](https://github.com/madhums/node-express-mongoose-demo)

See boilerplate readme below.

[![Build Status](https://img.shields.io/travis/madhums/node-express-mongoose.svg?style=flat)](https://travis-ci.org/madhums/node-express-mongoose)
[![Gittip](https://img.shields.io/gratipay/madhums.svg?style=flat)](https://www.gratipay.com/madhums/)
[![Dependencies](https://img.shields.io/david/madhums/node-express-mongoose.svg?style=flat)](https://david-dm.org/madhums/node-express-mongoose)


## Node Express Mongoose

A boilerplate application for building web apps using express, mongoose and passport.

Read the [wiki](https://github.com/madhums/node-express-mongoose/wiki) to understand how the application is structured.

## Installation and Usage
    
    $ git clone https://github.com/madhums/node-express-mongoose.git
    $ cd node-express-mongoose
    $ npm install
    $ npm start

Add routes (`config/routes.js`), create models (`app/models/`), views (`app/views/`) and controllers (`app/controllers/`).

Checkout the [apps that are built using this approach](https://github.com/madhums/node-express-mongoose/wiki/Apps-built-using-this-approach)

## License

MIT
