import React, { Component } from "react";

class ButtonTest extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
    return (
      <button onClick={this.handleClick}>+{this.props.incrementValue}</button>
    );
  }
}

const Result = props => {
  return <div>{props.counter}</div>;
};

class App1 extends React.Component {
  state = { counter: 0 };

  incrementCounter = incrementValue => {
    this.setState(prevstate => ({
      counter: prevstate.counter + incrementValue
    }));
  };

  render() {
    return (
      <div>
        <ButtonTest
          incrementValue={1}
          onClickFunction={this.incrementCounter}
        />
        <ButtonTest
          incrementValue={10}
          onClickFunction={this.incrementCounter}
        />
        <ButtonTest
          incrementValue={100}
          onClickFunction={this.incrementCounter}
        />
        <ButtonTest
          incrementValue={1000}
          onClickFunction={this.incrementCounter}
        />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

export default App1;
