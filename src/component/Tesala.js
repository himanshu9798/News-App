import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Tesala() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2025-02-11&sortBy=publishedAt&apiKey=7470a3a6500b41cbae836a46c694dbca"
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
        fontWeight: "600",
        color: "#333",
        marginBottom: "50px",
        letterSpacing: "1px"
      }}>
        Latest Tesla News & Insights
      </h1>
      <Link 
        to="/" 
        style={{
          display: "block", 
          textAlign: "center", 
          textDecoration: "underline", 
          color: "#2980b9", 
          fontSize: "18px", 
          marginBottom: "30px",
          fontWeight: "500",
          transition: "color 0.3s ease",
        }}
        onMouseEnter={e => e.target.style.color = "#2ecc71"}
        onMouseLeave={e => e.target.style.color = "#2980b9"}
      >
        Back to Home Page
      </Link>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 15px" }}>
        {data.map((value, index) => {
          return (
            <div key={index} style={{
              backgroundColor: "#fff",
              padding: "20px",
              marginBottom: "30px",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            }}>
              {value.urlToImage && (
                <img 
                  src={value.urlToImage} 
                  alt={value.title} 
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    objectFit: "cover",
                    marginBottom: "20px",
                  }} 
                />
              )}
              <h4 style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#2c3e50",
                marginBottom: "15px",
                lineHeight: "1.4",
                letterSpacing: "0.5px",
              }}>
                {value.title}
              </h4>
              <p style={{
                fontSize: "16px",
                color: "#555",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}>
                {value.description ? value.description.slice(0, 100) : ""}{" "}
                {value.description && value.description.length > 100 ? "..." : ""}
              </p>
              <a 
                href={value.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  fontSize: "16px",
                  color: "#2980b9",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={e => e.target.style.color = "#2ecc71"}
                onMouseLeave={e => e.target.style.color = "#2980b9"}
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Tesala;
