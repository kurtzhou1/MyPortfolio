import ReactDOM from 'react-dom';
import Moudle from './components/module'
import React, { Component } from "react";
import "./style.scss";

class Portfolio extends Component {

  render() {
    return (
      <div>
          <Moudle />
      </div>
    );
  }
}

ReactDOM.render(<Portfolio />, document.getElementById("root"));

window.Portfolio = Portfolio;

//https://ix-theme.com/html/kuber/