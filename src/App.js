import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage';


const App = () => {


  const [availableTimes, setAvailableTimes] = useState([  '17:00',  '18:00',  '19:00',  '20:00',  '21:00',  '22:00',]);



  return (
    <Router>
      <div className='App'>
    <Nav />
    <Routes>
      <Route path="/bookingpage" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/bookingpage" element={<BookingPage />} />
    </Routes>
    <Footer />
    </div>
    </Router>
  )
}

export default App;
