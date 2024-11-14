import './Footer.css'
import { FaRegClock, FaPhoneAlt  } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaFacebook, FaSquareXTwitter, FaSquareInstagram, FaLinkedin   } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <h2>We ready to have you the best dining experiences</h2>
                <div className="row">
                    <div className="col-md-3">
                        <div className='block'>
                            <FaRegClock />
                            <h5>Opening hours</h5>
                            <p>Monday - Sunday <br />
                            9:00 AM to 11:30 PM</p>
                        </div>   
                    </div>
                    <div className="col-md-3">
                        <div className='block'>
                            <FaPhoneAlt  />
                            <h5>LET'S TALK</h5>
                            <p>Phone: 1-800-222-4545 <br /> Fax: 1-800-222-4545</p>
                        </div>   
                    </div>
                    <div className="col-md-3">
                        <div className='block'>
                            <MdOutlineMailOutline />
                            <h5>BOOK A TABLE</h5>
                            <p>Email: demo@website.com<br />
                            Support: support@website.com</p>
                        </div>   
                    </div>
                    <div className="col-md-3">
                        <div className='block'>
                            <GrLocation />
                            <h5>Our Address</h5>
                            <p>123 Stree New York City , United <br /> States Of America.</p>
                        </div>   
                    </div>
                </div>
                <div className='social'>
                    <ul className='social-icons'>
                        <li><a href="#"> <FaFacebook /> </a></li>
                        <li><a href="#"> <FaSquareXTwitter /> </a></li>
                        <li><a href="#"> <FaSquareInstagram /> </a></li>
                        <li><a href="#"> <FaLinkedin  /> </a></li>
                    </ul>
                    <p>© 2023 All Rights Reserved </p>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;