var Reflux = require("reflux");

var CounterActions = Reflux.createActions([
  "incrementCounter",
  "decrementCounter"
]);

module.exports = CounterActions;