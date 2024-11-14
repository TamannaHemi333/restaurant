import './Testimonial.css'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import  { useRef } from "react";
import Slider from "react-slick";
import person1 from '../../assets/images/person-1.png';
import bg1 from '../../assets/images/tes-img-1.png';

const Testimonial = () => {

    let sliderRef = useRef(null);

    const next = () => {
      sliderRef.slickNext();
    };

    const previous = () => {
      sliderRef.slickPrev();
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <section className="testimonial-section">
            <div className="container">

                {/* Section Title */}
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div className="section-title">
                        <h5>Crispy, Every Bite Taste</h5>
                        <h2>What Some of my Customers Say</h2>

                    </div>
                    <div className="slider-arrow">
                        <MdArrowBackIos className='me-4' onClick={previous} />
                        <MdArrowForwardIos onClick={next} />

                    </div>
                </div>

                <div className="slider-container">
                    <Slider ref={slider => {
                            sliderRef = slider;
                            }} {...settings}>
                        
                        <div>
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <div className='testi-info'>
                                        <p>
                                            You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                                        </p>
                                        <div className='w-100 '>
                                            <div className='d-flex justify-content-between align-items-center  '>
                                                <div className='person'>
                                                    <h6>Khalid Al Dawsry</h6>
                                                    <p>Jeddah, Saudi</p>
                                                </div>
                                                <div>
                                                    <img className='img-fluid' src={person1} alt="person" />
                                                </div>
                                            </div>
                                            <hr className='client-line' />
                                            <hr className='client-line2' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className='testi-image'>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <div className='testi-info'>
                                        <p>
                                            You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                                        </p>
                                        <div className='w-100 '>
                                            <div className='d-flex justify-content-between align-items-center  '>
                                                <div className='person'>
                                                    <h6>Khalid Al Dawsry</h6>
                                                    <p>Jeddah, Saudi</p>
                                                </div>
                                                <div>
                                                    <img className='img-fluid' src={person1} alt="person" />
                                                </div>
                                            </div>
                                            <hr className='client-line' />
                                            <hr className='client-line2' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className='testi-image'>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <div className='testi-info'>
                                        <p>
                                            You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                                        </p>
                                        <div className='w-100 '>
                                            <div className='d-flex justify-content-between align-items-center  '>
                                                <div className='person'>
                                                    <h6>Khalid Al Dawsry</h6>
                                                    <p>Jeddah, Saudi</p>
                                                </div>
                                                <div>
                                                    <img className='img-fluid' src={person1} alt="person" />
                                                </div>
                                            </div>
                                            <hr className='client-line' />
                                            <hr className='client-line2' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className='testi-image'>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    
                    </Slider>
                </div>





            </div>
            
        </section>
    );
};

export default Testimonial;