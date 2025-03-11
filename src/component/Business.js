import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Business() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios
          .get(
            "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7470a3a6500b41cbae836a46c694dbca"
          )
          .then((res) => {
            setData(res.data.articles);
            console.log(res.data.articles);
          });
        },[])
  return (
    <>
     <>
    
    <h1 className="heading1"> Top business headlines</h1>
    <Link style={{textDecoration:"underline",float:"right",color:"red",}} to='/'>Go To Home PAge.....</Link> <br/>
 
  <div className="container">
    
       {/* <div className="background-video">
                <video autoPlay loop muted>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div> */}
    {data.map((value, index) => {
      return (
        <>
          <div className="main1">
            <img
              style={{
                height: "100px",
                width: "150px",
              
                borderRadius: "10px",
              }}
              src={value.urlToImage}
              alt=""
            ></img>

            <h4
              className="title"
              style={{ position: "relative", top: "25px" }}
            >
              🗞️{value.title}
            </h4>
            <p
              style={{
                position: "relative",
                top: "20px",
                overflow: "scroll",
                height:"100px",
                listStyle:"none",
                padding:"5px"
              }}
            >
              {value.description}
            </p>
            
          </div>
        </>
      );
    })}
   
  </div>
  </>
    </>
  )
}

export default Business
