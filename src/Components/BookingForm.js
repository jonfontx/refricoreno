import React, { useState } from 'react';

const BookingForm = (props) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleDateChange = (event) => {
    setDate(event.target.value);
    validateForm();
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    validateForm();
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
    validateForm();
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
    validateForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      // TODO: Submit the form data
      console.log('Form submitted!');
    }
  };

  const validateForm = () => {
    if (date && time && guests >= 1 && occasion) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <form
      className=''
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      onSubmit={handleSubmit}
    >
      <h3>Book Now</h3>
      <label htmlFor='res-date'>Choose date</label>
      <input
        type='date'
        id='res-date'
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor='res-time'>Choose time</label>
      <select
        id='res-time'
        value={time}
        onChange={handleTimeChange}
        required
      >
        <option value=''>Select Time</option>
        {props.availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor='guests'>Number of guests</label>
      <input
        type='number'
        placeholder='1'
        min='1'
        max='10'
        id='guests'
        value={guests}
        onChange={handleGuestsChange}
        required
      />

      <label htmlFor='occasion'>Occasion</label>
      <select
        id='occasion'
        value={occasion}
        onChange={handleOccasionChange}
        required
      >
        <option value=''>Select Occasion</option>
        <option value='Birthday'>Birthday</option>
        <option value='Anniversary'>Anniversary</option>
      </select>

      <input
        type='submit'
        value='Make Your reservation'
        disabled={!isFormValid}
      />
    </form>
  );
};

export default BookingForm;
