import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage';


const App = () => {

  return (
    <Router>
      <div className='App'>
    <Nav />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/bookingpage" element={<BookingPage />} />
    </Routes>
    <Footer />
    </div>
    </Router>
  )
}

export default App;
