import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';


const App = () => {


  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
