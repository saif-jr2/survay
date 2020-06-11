import React, { useState, useEffect } from "react";
import {fetchData} from './api/index';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import {Bar} from 'react-chartjs-2';
import './app.css';

import logo from './assets/values_logo.png'
function App() {
    const [Qr,setQr] = useState([]);
    useEffect(()=>{
      async function fetchApi(){
        const result =  await fetchData();
        setQr(result);
      }
      fetchApi();
    },[])
    
    // console.log(Qr[0]);
    const Qarr = []

    for(let i = 0 ; i< Qr.length;i++){ 
      Qarr.push(
      Qr[0] ?
        <Bar
          data = {{
            labels : ['Yes' , 'No' , 'Dont know'],
            datasets : [{
              label : 'People',
              backgroundColor : ['rgba(77, 5, 232, 1)', 'rgb(238, 238, 0)', 'rgb(0, 177, 106)'],
              data : [Qr[i].Yes, Qr[i].No ,Qr[i].Dont_Know]
            }]
          }}
          options = {{
            legend : {display : false},
            title : {display: true ,text: Qr[i].Question_Txt}
          }}
        /> : null
      )
    }
    console.log(Qarr)

  return (
    <React.Fragment>
      <div className='itemContainer'>

      <div className='header'>
        <div><img src={logo} alt='img'/></div>
        <div><h3>نتائج دراسه إستطلاع رأي</h3></div>
        <div><p>  ....... : إسم المنتح</p></div>
        <div><p>......... : المالك</p></div>
        <div><p> ........ : تاريخ الدراسه</p></div>
        <div><p> ADSURVEY تم إعداد الدراسه بواسطه فريق </p></div>
      </div>
      {Qarr.map((ele , index) => (
        <Card className="item">
          <div key={index}>{ele}</div>
        </Card>
       ))}
    </div>
    </React.Fragment>
    
  );
}
export default App;

