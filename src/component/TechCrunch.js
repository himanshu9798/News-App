// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function TechCrunch() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7470a3a6500b41cbae836a46c694dbca"
//       )
//       .then((res) => {
//         setData(res.data.articles);
//         console.log(res.data.articles);
//       });
//   }, []);

//   return (
//     <>
//       <h1> Top headlines from TechCrunch</h1>
//       <Link to="/">Go To Home Page.....</Link>
//       <br />
//       <div>
//         {data.map((value, index) => {
//           return (
//             <div key={index}>
//               <img src={value.urlToImage} alt="" />
//               <h4>🗞️{value.title}</h4>
//               <p>
//                 {value.description ? value.description.slice(0, 100) : ""}{" "}
//                 {value.description && value.description.length > 100 ? "..." : ""}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default TechCrunch;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TechCrunch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7470a3a6500b41cbae836a46c694dbca"
      )
      .then((res) => {
        setData(res.data.articles);
        console.log(res.data.articles);
      });
  }, []);

  return (
    <>
     <h1 style={{ 
  textAlign: "center", 
  fontSize: "36px", 
  padding: "20px", 
  backgroundImage: "linear-gradient(to right, #1abc9c, #3498db)", 
  WebkitBackgroundClip: "text", 
  color: "transparent" 
}}>
  Top headlines from TechCrunch
</h1>
      <Link to="/" style={{float:"right", textDecoration: "underline", color: "blue", marginBottom: "20px" }}>
        Go To Home Page.....
      </Link>
      <br/><br/>
      
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {data.map((value, index) => {
          return (
            <div key={index} style={{ marginBottom: "30px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
              {value.urlToImage && (
                <img
                  src={value.urlToImage}
                  alt={value.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    marginBottom: "15px",
                  }}
                />
              )}
              <h4 style={{ fontSize: "24px", color: "#79898", fontWeight: "bold" }}>
                 {value.title}
              </h4>
              <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6", marginBottom: "15px" }}>
                {value.description ? value.description.slice(0, 150) : ""}{" "}
                {value.description && value.description.length > 150 ? "..." : ""}
              </p>
              <a
                href={value.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "16px",
                  color: "#007bff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Read more
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TechCrunch;

