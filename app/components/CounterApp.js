import React from 'react';
import CounterTracker from "./CounterTracker";
import CounterButton from "./CounterButton";
import ErrorMessage from "./ErrorMessage";

export default class CounterApp extends React.Component {
  render() {
    return (
      <div>
        <ErrorMessage />
        <CounterTracker />
        <CounterButton increment={true}/>
        <CounterButton decrement={true}/>
      </div>
    );
  }
}