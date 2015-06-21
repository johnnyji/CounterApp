import React from 'react';
var ErrorStore = require("../stores/ErrorStore");

export default class ErrorMessage extends React.Component {
  constructor() {
    super();
    this.state = { message: null };
    this.onErrorMessage = this.onErrorMessage.bind(this);
    this.unmountError = this.unmountError.bind(this);
  }
  componentDidMount() {
    this.unsubscribe = ErrorStore.listen(this.onErrorMessage);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  onErrorMessage(message) {
    this.setState({ message: message });
  }
  unmountError() {
    this.setState({ message: null });
  }
  render() {
    if (this.state.message) {
      return (
        <div>
          {this.state.message}
          <span onClick={this.unmountError}>x</span>
        </div>
      );
    } else {
      return <div/>
    }
  }
}
