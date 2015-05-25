# Contacts App made with React and Backbone

## POC

Goal is to exhibit that:
- Backbone for models and collections
- React for views and controllers

## Requirements

```
gem install compass
npm install -g grunt-cli
npm install -g browserify
```

## Development

Run `npm install` from this directory and then `grunt` to fire up a server. This server is separate from the main project's server. You will need to run the root project's server for access to the data backend, so be sure to `cd ..` from this directory and run `node server.js`.

## Approach

Attempting to make the components independent of the framework, so, in this case, no Backbone code in the components.

This will allow the components to work on their own and can be available to teams needing the component's functionality but using a framework that better suites their needs.

## To Do
- refactor to a Flux like organizational structure
- add CRS