import React from 'react';
var Reflux = require("reflux");
var CounterActions = require("../actions/CounterActions");
var CounterStore = require("../stores/CounterStore");

export default class CounterTracker extends React.Component {
  constructor() {
    super();
    this.state = CounterStore.getState();
    this.onChangeCount = this.onChangeCount.bind(this);
  }
  componentDidMount() {
    this.unsubscribe = CounterStore.listen(this.onChangeCount);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  onChangeCount(newCount) {
    this.setState({ count: newCount });
  }
  render() {
    return (
      <div>
        <h1>The count is {this.state.count}</h1>
      </div>
    );
  }
}