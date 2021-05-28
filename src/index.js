import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Moudle from "./components/module";
// import Datatree from "./components/Datatree";
// import files from "./json/ticketInfo.json";
// import Button from "./components/Button";
// import Fileload from "./components/Fileload";
// import SalaryCalculator from "./components/SalaryCalculator";
// import ChatRoom from "./components/ChatRoom";
// import Router from "./components/Router";
// import TextToImage from "./components/TextToImage"
// import * as serviceWorker from "./serviceWorker";
// import { BrowserRouter, Switch } from 'react-router-dom';
// import Quixote from './components/Pdftest.js';
// import "./components/style.scss";
// import Recharts from "./components/Recharts.jsx";
import ReactPDF,{ usePDF, Page, Text, View, Document, StyleSheet,PDFViewer,pdf  } from '@react-pdf/renderer';

const dataArray_pdf = [
  {number:'A1212212',name:'車險'},
  {number:'Y23236793-32',name:'醫療險'}
]
const styles = StyleSheet.create({
  page: {
  flexDirection: 'row',
  backgroundColor: '#E4E4E4',
  paddingTop: 35,
  paddingBottom: 65,
  paddingHorizontal: 35,
  },
  section: {
  margin: 10,
  padding: 10,
  flexGrow: 1
  }
});
    
// Create Document Component


const Test =()=> {

  const PDFStyle = {
    page: {
        backgroundColor: '#fff',
        color: '#4d4d4d',
        padding: '20px',
        lineHeight: '1.5',
        fontSize: '14px',
      },
    mainTitle: {
        backgroundColor: '#ebebeb',
        padding: '10px 0',
        textAlign: 'center',
        fontSize: '18px',
    },
    subTitle: {
        fontSize: '16px',
        textAlign: 'center',
        margin: 15,
    },
    text: {
        textAlign: 'justify',
    },
    confirm: {
        marginTop: 15,
        marginBottom: 15,
        fontSize: '17px',
    },
    // 表格
    table: {
        width: '100%',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    tableRow:{
        display: 'flex',
        flexDirection: 'row',
    },
    cell: {
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    column3:{
        width:'30%',
    },
    column7:{
        width:'70%',
    },
    // 合約
    constractContent:{
        flexDirection:'row',
    },
    // 圖
    image: {
        height: '1cm',
    },
    //公用
    textDecoration:{
        textDecoration:'underline',
    },
    marginTB5:{
        marginTop: 5,
        marginBottom: 5,
    },
    marginB5:{
        marginBottom: 5,
    }
  }

  const styles = StyleSheet.create(PDFStyle);
   

  const MyDocument = (
    <PDFViewer>
    <Document>
        <Page>
          <View>
            <Text style={styles.mainTitle}>保單健診同意書</Text>
          </View>
          <View>
            <Text style={[styles.text,styles.marginTB5]}>親愛的客戶 您好：</Text>
            <Text style={styles.text}>感謝您選擇台北富邦銀行為您提供保單健診及保險規劃服務，我們重視您的風險規劃，並不斷地致力於提供更優質、專業與創新的服務，以期成為您貼心的理財夥伴。
            基於維護您的個人資料安全，請您親自簽署同意書後以便進行保單健診及保險規劃服務。若無法取得您的同意，台北富邦銀行將無法提供保單健診及保險規劃服務；且取得您同意後，您亦得事後隨時向台北富邦銀行提出變更為不同意，我們會予以尊重並配合辦理。
            </Text>
          </View>
          <View>
            <Text style={[styles.subTitle,styles.textDecoration]}>保單彙整同意書</Text>
            <Text style={styles.marginB5}>立書人____________針對提供台北富邦商業銀行股份有限公司（以下稱貴行）進行保單健診及保險規劃服務之所有保單，茲聲明經貴行依個人資料保護法規定履行告知義務，同意下述事項，特立本同意書為證。
            </Text>
            <Text style={styles.marginB1}>此致  台北富邦商業銀行股份有限公司</Text>
          </View>
          <View style={[styles.tableRow,styles.marginB5]}>
            <Text>立同意書人/法定代理人：</Text>
          </View>
          <View><Text style={[styles.column4]}>身分證字號：</Text></View>
          <View style={[styles.tableRow,styles.marginB5]}>
            <Text>業務員簽名：</Text>
          </View>
          <View style={[styles.tableRow,styles.marginB5]}>
          </View>
          <View style={[styles.tableRow,styles.marginB5]}>
          </View>
          <View style={[styles.tableRow,styles.marginB5]}>
            <Text>位主管簽名/蓋章：</Text>
          </View>
        </Page>
    </Document>
    </PDFViewer>
  );

    return (
      // <PDFViewer>
      //   <MyDocument />
      // </PDFViewer>
      <div className="hello??">
        {MyDocument}
      </div>
    );
}

// const blob = pdf(MyDoc).toBlob();
// console.log(blob)
ReactDOM.render(<Test />, document.getElementById("root"));
// ReactPDF.render(<Quixote />, document.getElementById("root"));