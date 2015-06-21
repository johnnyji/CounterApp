var Reflux = require("reflux");
var CounterActions = require("../actions/CounterActions");
var ErrorActions = require("../actions/ErrorActions");
var _ = require("lodash");

var _count = 0;

var CounterStore = Reflux.createStore({
  listenables: CounterActions,
  getState: function() {
    return { count: _count };
  },
  onIncrementCounter: function() {
    _count ++;
    this.trigger(_count);
  },
  onDecrementCounter: function() {
    if (_count <= 0) { 
      ErrorActions.errorMessage("Lowest!");
      return this.trigger(_count); 
    }
    _count --;
    this.trigger(_count);
  },
});

module.exports = CounterStore;