import React from "react";
import BookingForm from "./BookingForm";
import resto from "../icons_assets/restaurant.jpg"

const BookingPage = () => {
    return (
        <div className="book-container">
         <BookingForm />
         <img src={resto} alt="resto" />
        </div>
    );
};

export default BookingPage;