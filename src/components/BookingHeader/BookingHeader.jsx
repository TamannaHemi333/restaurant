import React from 'react';
import "./BookingHeader.css";

const BookingHeader = () => {
  return (
    <div className="booking-header">
      <div className="header-icon">
        <img src="./assets/rectangle-4708.svg" alt="Icon" />
      </div>
      <div className="header-text">
        <h2 style={{ color: '#bd1f17' }}>Book Now</h2>
        <h1 style={{ color: '#ffffff' }}>BOOK YOUR TABLE</h1>
        <p style={{ color: '#f7f8f9' }}>
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
        </p>
      </div>
    </div>
  );
}

export default BookingHeader;
