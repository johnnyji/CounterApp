var Reflux = require("reflux");

var ErrorActions = Reflux.createActions([
  "clearMessage",
  "errorMessage"
]);

module.exports = ErrorActions;