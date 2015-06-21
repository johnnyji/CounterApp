import React from 'react';
import CounterTracker from "./CounterTracker";
import CounterButton from "./CounterButton";

export default class CounterApp extends React.Component {
  render() {
    return (
      <div>
        <CounterTracker />
        <CounterButton />
      </div>
    );
  }
}