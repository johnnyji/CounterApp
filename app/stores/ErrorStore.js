var Reflux = require("reflux");
var ErrorActions = require("../actions/ErrorActions");

var ErrorStore = Reflux.createStore({
  listenables: ErrorActions,
  onErrorMessage: function(message) {
    this.trigger(message);
  }
});

module.exports = ErrorStore;