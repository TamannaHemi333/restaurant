
import React from 'react';
import './FooterContactInfo.css';

const FooterContactInfo = () => {
  return (
    <div className="footer-contact-info">
    <ContactItem 
      icon="./assets/clock.svg" 
      title="Opening hours"
      details="Monday - Sunday\n9:00 AM to 11:30 PM"
    />
    <ContactItem 
      icon="./assets/call-alt.svg" 
      title="LET'S TALK"
      details="Phone: 1-800-222-4545\nFax: 1-800-222-4545"
    />
    <ContactItem 
      icon="./assets/mail.svg" 
      title="BOOK A TABLE"
      details="Email: demo@website.com\nSupport: support@website.com"
    />
    <ContactItem 
      icon="./assets/map-pin.svg" 
      title="Our Address"
      details="123 Stree New York City, United States Of America."
    />
  </div>
   
  )
};


const ContactItem = ({ icon, title, details }) => (
  <div className="contact-item">
    <img src={icon} alt={title} />
    <div className="contact-details">
      <h3>{title}</h3>
      <p>{details}</p>
    </div>
  </div>
);

export default FooterContactInfo