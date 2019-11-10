import React, { Component } from "react";

class Fileload extends Component {
  state = {
    img: ""
  };
  onChange = e => {
    const file = e.target.files.item(0); //利用e.target.files取得選取到的檔案們
    const fr = new FileReader(); //利用FileReader讀取一個檔案內容成為 -> 1
    fr.addEventListener("load", this.fileload);
    fr.readAsDataURL(file); //成為一個data的url
  };
  fileload = e => {
    this.setState({
      img: e.target.result
    });
  };
  render() {
    const tmp = '1234'
    console.log(tmp.substr(0, 1))
    console.log(tmp.substring(0, 1))
    const tmp2 = {
      name: '@tips_js'
    };

    console.log(tmp2.hasOwnProperty('aaa'))
    console.log('aaa' in tmp2)
    return (
      <div>
        <input type="file" onChange={this.onChange} />
        <img width="10%" src={this.state.img} />
      </div>
    );
  }
}
export default Fileload;
