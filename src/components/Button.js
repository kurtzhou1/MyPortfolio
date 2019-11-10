import React, { Component } from "react";

class Button extends Component {
  state = {
    gender: "male",
    like: {
      male: false,
      female: false
    }
  };

  onChangeGender = e => {
    this.setState({
      gender: e.target.value
    });
  };

  onLike = e => {
    const key = e.target.value;
    console.log("gender:", key);
    this.setState(state => ({
      like: {
        ...state.like,
        [key]: !state.like[key]
      }
    }));
  };
  render() {
    const { gender, like } = this.state;
    return (
      <div>
        <ul>
          Your gender：
          <input
            type="radio"
            value="male"
            onChange={this.onChangeGender}
            checked={gender === "male"}
          />
          <label>male</label>
          <input
            type="radio"
            value="female"
            onChange={this.onChangeGender}
            checked={gender === "female"}
          />
          <label>female</label>
        </ul>
        <ul>
          You Like
          <input
            type="checkbox"
            onChange={this.onLike}
            value="male"
            checked={like.male}
          />
          <label>male</label>
          <input
            type="checkbox"
            onChange={this.onLike}
            value="female"
            checked={like.female}
          />
          <label>female</label>
        </ul>
      </div>
    );
  }
}

export default Button;
