import React, { Component } from "react";
import ReactDOM from "react-dom";
import Moudle from "./components/module";
import Datatree from "./components/Datatree";
import files from "./json/ticketInfo.json";
import Button from "./components/Button";
import Fileload from "./components/Fileload";
import SalaryCalculator from "./components/SalaryCalculator";
import ChatRoom from "./components/ChatRoom";
import Router from "./components/Router"
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch } from 'react-router-dom';
import "./components/style.scss";

class Test extends Component {

  render() {
    console.log("chu", Router);
    return (
      <div>
        <div className='number'>0</div>
        <div className="title">Router練習</div>
        <BrowserRouter>
          <Switch>
            <Router />
          </Switch>
        </BrowserRouter>
        <div className='number'>1</div>
        <div className="title">父承練習及從網頁更改字串值</div>
        <Moudle />
        <div className='number'>2</div>
        <div className="title">單選與多選</div>
        <Button />
        <div className='number'>3</div>
        <div className="title">檔案樹</div>
        <Datatree files={files} />
        <div className='number'>4</div>
        <div className="title">檔案上傳與圖片預覽</div>
        <Fileload />
        <div className='number'>5</div>
        <div className="title">薪水計算機</div>
        <SalaryCalculator />
        <div className='number'>6</div>
        <div className="title">一個人聊天室</div>
        <ChatRoom />
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById("root"));
serviceWorker.unregister();
