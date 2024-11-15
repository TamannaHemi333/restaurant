import './Testimonial.css'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";


import  { useRef } from "react";
import Slider from "react-slick";
import TestimonialCard from './TestimonialCard';
import person1 from '../../assets/images/c1.jpg';
import person2 from '../../assets/images/c2.jpg';
import person3 from '../../assets/images/c3.jpg';
import imgOne from '../../assets/images/tomato.png';
import imgTwo from '../../assets/images/grass.png';


const Testimonial = () => {

    let sliderRef = useRef(null);

    const next = () => {
      sliderRef.slickNext();
    };

    const previous = () => {
      sliderRef.slickPrev();
    };

    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };


    const data = [
        {
            text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
            name: "Khalid Al Dawsry",
            designation: "Jeddah, Saudi",
            img: person1,
            url: "https://www.youtube.com/embed/agupoIGOIs0?si=oNxB5AlYgnFffcB8"

            
        },
        {
            text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
            name: "John Done",
            designation: "President",
            img: person2,
            url: "https://www.youtube.com/embed/agupoIGOIs0?si=oNxB5AlYgnFffcB8"

            
        },
        {
            text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
            name: "Michel Jection",
            designation: "Dancer",
            img: person3,
            url: "https://www.youtube.com/embed/agupoIGOIs0?si=oNxB5AlYgnFffcB8"
            
        },
    ]



    return (
        <section className="testimonial-section">
            <div>
                <img src={imgOne} className='imageOne' alt="Image" />
                <img src={imgTwo} className='imageTwo' alt="Image" />
            </div>
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
                        {
                            data.map( (item, index) => <TestimonialCard key={index} data ={item} /> )
                        }
          
                    </Slider>
                    <div className="slider-arrow-mobile">
                        <MdArrowBackIos className='me-4' onClick={previous} />
                        <MdArrowForwardIos onClick={next} />
                    </div>
                </div>





            </div>
            
        </section>
    );
};

export default Testimonial;