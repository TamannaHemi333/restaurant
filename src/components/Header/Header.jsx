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
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#features">Portfolio</Nav.Link>
            <Nav.Link href="#features">Clients</Nav.Link>
            <Nav.Link href="#features">Blog</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            
            
          </Nav>
          <Nav>
          <button className="book-table">BOOK A TABLE</button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;