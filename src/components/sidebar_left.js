import React, { useState,Component } from 'react';
import Content from "./Content";
import '../style.scss'
import '../split.scss'

const Siderbar = () => {
  const label =[['H', 'O', 'M', 'E'],
    ['A', 'B', 'O', 'U', 'T'],
    ['P', 'P', 'P', 'T', 'F', 'O', 'L', 'I', 'T'],
    ['C', 'o', 'n', 't', 'a', 'c', 't']]
    return (
      label.map((ele1) => {
        let labelLength = ele1.length;
        return (
          <div className="nav__label">
            <span className="nav__label_inner slide-horizontal hbrable words chars splitting" data-splitting style={{ "--word-total": 1, "--char-total": labelLength }}>
              <span className="word" style={{ '--word-index': 0 }} >
                {ele1.map((ele2, i) => (
                  <span className="char" style={{ "--char-index": i }}>{ele2}</span>
                ))}
              </span>
            </span>
          </div>
        )
      })
    )
}

class sidebar extends Component {
  state = {
    name: 'sidebar_left',
    menu: false,
    // label2: [
    //   ['H', 'O', 'M', 'E'],
    //   ['A', 'B', 'O', 'U', 'T'],
    //   ['P', 'P', 'P', 'T', 'F', 'O', 'L', 'I', 'T'],
    //   ['C', 'o', 'n', 't', 'a', 'c', 't']]
  };
  menu = () => {
    this.setState({
      menu: !this.state.menu
    })
  }
  

  render() {
    const { name, menu } = this.state;
    const props = {
      menu: this.state.menu
    }
    // const [menu,toggle]= useState(false);
    return (
      <React.Fragment>
        <div className={name}>
          <div className={`${name}_navigation`} onClick={this.menu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`${name}_text`}><span>Home</span></div>
        </div>
        <nav className={`navigation ${menu ? 'show' : ''}`}>
          <div className="container-fluid h-100">
            <div className="row no-gutters justify-content-center h-100">
              <div className="col-md-12">
                {/* <Siderbar label={this.state.label2} /> */}
                <Siderbar />
              </div>
              <div className="col-md-12"></div>
            </div>
          </div>
        </nav>
        <Content {...props} />
      </React.Fragment>
    );
  }
}

export default sidebar;
