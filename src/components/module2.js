import React, { Component } from "react";

class module2 extends Component {
  state = {
    count: 0
  };

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <div>{`Moudle2:${this.state.count}`}</div>
        <button onClick={this.props.add1Count}>+ module</button>
        <button onClick={this.addCount}>+ module2</button>
      </div>
    );
  }
}

export default module2;
