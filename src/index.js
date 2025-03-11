import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apple from './component/Apple';
import Business from './component/Business';
import TechCrunch from './component/TechCrunch';
import Latest from './component/Latest';
import Tesala from './component/Tesala';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/apple' element={<Apple/>}></Route>
      <Route path='/Business' element={<Business/>}></Route>
      <Route path='/Tech' element={<TechCrunch/>}></Route>
      <Route path='/latest' element={<Latest/>}></Route>
      <Route path='/tesala' element={<Tesala/>}></Route>

    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
