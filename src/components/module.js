import React, { Component, createRef } from "react";
import Moudle2 from "./module2";

class Moudle extends Component {
  Moudle2Ref = createRef();
  state = {
    count: 0,
    text: "你的名字"
  };

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  add2Count = () => {
    this.Moudle2Ref.current.addCount();
  };

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <div>{`Moudle:${this.state.count}`}</div>
        <button onClick={this.addCount}>+ Moudle</button>
        <button onClick={this.add2Count}>+ module2</button>
        <Moudle2 ref={this.Moudle2Ref} add1Count={this.addCount} />
        <input type="text" value={text} onChange={this.onChange} />
        <div>{text}</div>
        <input type="file" />
      </div>
    );
  }
}

export default Moudle;
