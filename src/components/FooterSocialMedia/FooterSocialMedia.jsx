

import React from 'react';
import "./FooterSocialMedia.css";

const FooterSocialMedia = () => {
  return (
    <div className="footer-social-media">
      <SocialIcon icon="./assets/facebook-circle.svg" alt="Facebook" />
      <SocialIcon icon="./assets/twitter-round-new-alt.svg" alt="Twitter" />
      <SocialIcon icon="./assets/instagram-round.svg" alt="Instagram" />
      <SocialIcon icon="./assets/linkedin-round.svg" alt="LinkedIn" />
      <p className="footer-rights">© 2023 All Rights Reserved</p>
    </div>

    
  )
}

const SocialIcon = ({ icon, alt }) => (
    <div className="social-icon">
      <img src={icon} alt={alt} />
    </div>
  );

export default FooterSocialMedia