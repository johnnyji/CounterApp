var Reflux = require("reflux");
var ErrorActions = require("../actions/ErrorActions");

var _errorMessage = null;

var ErrorStore = Reflux.createStore({
  listenables: ErrorActions,
  onErrorMessage: function(message) {
    _errorMessage = message;
    this.trigger(_errorMessage);
  },
  onClearMessage: function() {
    _errorMessage = null;
    this.trigger(_errorMessage);
  },
  errorMessage: function() {
    return _errorMessage;
  }
});

module.exports = ErrorStore;