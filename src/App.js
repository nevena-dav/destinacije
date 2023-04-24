import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
    <BrowserRouter className="App">
     <NavBar />
     
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;





