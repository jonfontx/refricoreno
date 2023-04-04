import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import BookingForm from './Components/BookingForm';


const App = () => {

  return (
    <Router>
      <body className='App'>
    <Nav />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/bookingpage" element={<BookingForm />} />
    </Routes>
    <Footer />
    </body>
    </Router>
  )
}

export default App;
