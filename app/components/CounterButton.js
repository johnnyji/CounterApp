import React from 'react';
var CounterActions = require("../actions/CounterActions");

export default class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  handleIncrement() {
    CounterActions.incrementCounter();
  }
  handleDecrement() {
    CounterActions.decrementCounter();
  }
  render() {
    var p = this.props;
    return (
      <div>
        {p.increment && <button onClick={this.handleIncrement}>Increment!</button>}
        {p.decrement && <button onClick={this.handleDecrement}>Decrement!</button>}
      </div>
    );
  }
}

CounterButton.propTypes = {
  increment: React.PropTypes.bool,
  decrement: React.PropTypes.bool
}
