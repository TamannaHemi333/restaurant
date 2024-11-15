

import "./Hero.css";
import heroImag from '../../assets/images/hero_image.png'

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className='row'>
          <div className="col-md-6">
            <div className='hero-info'>
              <h1>Taste the authentic <br />  Saudi cuisine</h1>
              <p>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
              <button className='book-table'>Explore Menu</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className='hero-image'>
              <img src={heroImag} alt="Food" />
            </div>
          </div>
        </div>
      </div>
      
    </section>
    
  )
}

export default Hero