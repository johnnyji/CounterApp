import React from 'react';
var CounterActions = require("../actions/CounterActions");

export default class CounterButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    CounterActions.incrementCounter();
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment!</button>
      </div>
    );
  }
}
