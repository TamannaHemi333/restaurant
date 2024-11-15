import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/images/logo.png";
import './Header.css'
import { useState } from 'react';


const Header = () => {
  const [bgColor, setBgColor] = useState(false);
  

  const changeValueScroll = ()=>{
    const scrollValue = document.documentElement.scrollTop;
    if(scrollValue > 200){
        setBgColor(true);
    } else {
        setBgColor(false);
    }
};
window.addEventListener('scroll', changeValueScroll);


    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" className={bgColor ? "activeColor" : " "} >
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#clients">Clients</Nav.Link>
            <Nav.Link href="#blogs">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            
            
          </Nav>
          <Nav>
            <a  className="book-table" href="#book-table">BOOK A TABLE</a>
          
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;