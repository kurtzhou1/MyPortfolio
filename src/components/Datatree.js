import React, { Component } from "react";
import Files2 from "../json/ticketInfo.json";
import "./style.scss";

class Datatree extends Component {
  state = {
    open: false
  };
  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    console.log("here1", this.props.files); //Files1
    console.log("here2", Files2);
    // const { goDate, Detail } = Files2;
    const { files } = this.props;
    const { open } = this.state;
    return (
      <React.Fragment>
        <div>
          <button onClick={this.toggle}>{open ? "close" : "open"}</button>
          {files.map((item, i) => (
            <ul
              onClick={this.toggle}
              className={`folder ${open ? `open` : ``}`}
            >
              {item.goDate}
              <div>
                {!open
                  ? null
                  : files[i].detail.map(ele => <li>{ele.price}</li>)}
              </div>
            </ul>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Datatree;
