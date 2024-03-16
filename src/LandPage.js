// LandPage.js
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsObject from './NewsObject';
import NavBars from './NavBars';
function LandPage() {
  //http constants 
  const SERVER_URL = "http://localhost:8080";
  const FrontEndAxios = axios.create({
    baseURL: SERVER_URL,
  });

  // hooks
  const [arrObjs, setArrObjs] = useState([]);
  
  // variables

  const tmpArrObjs = [];
  




  // ======================================================
  // HTTP get request
  async function getHandler(){
    try{
      const res =  await FrontEndAxios.get('/',{
        headers: {
          'Content-Type' : 'Application/JSON'
        },
      })

      const resObjs = Object.values(res.data);
      resObjs.forEach( (obj) => {
        tmpArrObjs.push(obj);
      });

      setArrObjs(tmpArrObjs);

      console.log(arrObjs.length);
      console.log(arrObjs[0]);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect( ()=>{
    getHandler();
  },[]);



// ===========================return
  return (
    <div>
      <NavBars />
      <div>
        {
          arrObjs.length >0  &&      
          arrObjs.map( (item, index) =>(
            <NewsObject key={index} ResponseJson={item} />
          ))
        }
      </div>
    </div>
  );
}

export default LandPage;
