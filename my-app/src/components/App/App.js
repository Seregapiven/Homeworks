import './App.css';

import React, { Component } from 'react';

class App extends Component {
  state = {
    operand1: "",
    operand2: "",
    action: "+",
    result: "",
  }

  onInputChange1 = (e) => {
    this.setState({
      operand1: e.target.value,
    });
  };

  onChangeAction = (e) => {
    this.setState({
      action: e.target.value,
    });
  };

  onInputChange2 = (e) => {
    this.setState({
      operand2: e.target.value,
    });
  };

  onCalculate = () => {
    return this.setState({
      result: Number(this.state.operand1) + Number(this.state.operand2),
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.operand1} onChange={this.onInputChange1} />
        <h1>{this.state.action}</h1>
        <input value={this.state.operand2} onChange={this.onInputChange2} />
        <button onClick={this.onCalculate}>Calculate</button>
        <div>{this.state.result}</div>
      </div>
    );
  }
 }

export default App;
