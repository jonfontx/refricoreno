import React from 'react';
import BookingForm from './BookingForm';
import resto from '../icons_assets/restaurant.jpg';

const BookingPage = (props) => {
  return (
    <div className='book-container'>
      <BookingForm availableTimes={props.availableTimes} />
      <img src={resto} alt="resto" />
    </div>
  );
};

export default BookingPage;