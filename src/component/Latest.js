import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Latest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7470a3a6500b41cbae836a46c694dbca"
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
        fontSize: "40px",
        fontWeight: "700",
        color: "#fff",
        padding: "20px",
        backgroundImage: "linear-gradient(to left, #f5af19, #f12711)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        letterSpacing: "2px",
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
        marginBottom: "40px"
      }}>
        Latest Insights from The Wall Street Journal: Top Stories from the Last 6 Months
      </h1>
      <Link 
        to="/" 
        style={{
          display: "block", 
          textAlign: "center", 
          textDecoration: "underline", 
          color: "#ff6f61", 
          fontSize: "18px",
          marginBottom: "30px",
          fontWeight: "bold"
        }}
      >
        Go To Home Page.....
      </Link>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {data.map((value, index) => {
          return (
            <div key={index} style={{
              marginBottom: "40px",
              padding: "25px",
              border: "1px solid #ddd",
              borderRadius: "15px",
              backgroundColor: "#f0f0f0",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              overflow: "hidden",
            }}>
              {value.urlToImage && (
                <img 
                  src={value.urlToImage} 
                  alt={value.title} 
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    transition: "transform 0.3s ease",
                  }} 
                />
              )}
              <h4 style={{
                fontSize: "26px", 
                color: "#333", 
                fontWeight: "bold", 
                marginBottom: "15px",
                textTransform: "uppercase"
              }}>
                {value.title}
              </h4>
              <p style={{
                fontSize: "16px", 
                color: "#555", 
                lineHeight: "1.8", 
                marginBottom: "20px",
                paddingRight: "20px",
              }}>
                {value.description ? value.description.slice(0, 120) : ""}{" "}
                {value.description && value.description.length > 120 ? "..." : ""}
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
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={e => e.target.style.color = "#ff6f61"}
                onMouseLeave={e => e.target.style.color = "#007bff"}
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

export default Latest;
