import "./Navbar.css";
import logo from '../../assets/images/logo.png';


const Navbar = () => {
  return (

   
    <header>
      <div className="container">
        <div className="nav-section">
          <nav className="navigation-bar">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <span className="restaurant-name">Restaurant</span>
            </div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="text-end">
            <button className="book-table">BOOK A TABLE</button>
          </div>
          
        </div>


      </div>
    </header>
    
  )
}

export default Navbar