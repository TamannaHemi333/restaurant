
import React from 'react';
import "./TestiCard.css";

const TestiCard = () => {
  return (
    <div className="testimonial-card">
    <div className="quote-text">
      <p className="quote-symbol">“</p>
      <p>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
    </div>
    <div className="author-info">
      <div className="author-text">
        <strong>KHALID AL DAWSRY</strong>
        <span>Jeddah, Saudi</span>
      </div>
      <div className="author-image">
        <img src="./assets/image.svg" alt="Author" />
      </div>
    </div>
  </div>
   
  )
}

export default TestiCard