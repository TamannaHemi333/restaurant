import './FoodItem.css';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";


import React, { useRef } from "react";


import Slider from "react-slick";

import food1 from '../../assets/images/food-1.png';
import food2 from '../../assets/images/food-2.png';
import food3 from '../../assets/images/food-3.png';
import food4 from '../../assets/images/food-4.png';

import sideImg  from '../../assets/images/about-side.png'

const FoodItem = () => {
    const data = [
      {
        img : food1,
        title: "vegetables burger",
        des: "Barbecue Italian cuisine pizza"
      },
      {
        img : food1,
        title: "vegetables burger",
        des: "Barbecue Italian cuisine pizza"
      },
      {
        img : food1,
        title: "vegetables burger",
        des: "Barbecue Italian cuisine pizza"
      },
      {
        img : food1,
        title: "vegetables burger",
        des: "Barbecue Italian cuisine pizza"
      }
    ]

    let sliderRef = useRef(null);

    const next = () => {
      sliderRef.slickNext();
    };

    const previous = () => {
      sliderRef.slickPrev();
    };


    var settings = {
      // dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <section className="food-item-section">
      <div className="side-img">
          <img src={sideImg} alt="side Image" />
      </div>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div className="section-title">
            <h5>Crispy, Every Bite Taste</h5>
            <h2>POPULAR FOOD ITEMS</h2>

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
                <div className='food-card'>
                  <img src={food1} alt="Food" />
                  <hr className="divider" />
                  <div className="food-info">
                    <h4>vegetables burger</h4>
                    <p>Barbecue Italian cuisine pizza</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='food-card'>
                  <img src={food2} alt="Food" />
                  <hr className="divider" />
                  <div className="food-info">
                    <h4>vegetables burger</h4>
                    <p>Barbecue Italian cuisine pizza</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='food-card'>
                  <img src={food2} alt="Food" />
                  <hr className="divider" />
                  <div className="food-info">
                    <h4>vegetables burger</h4>
                    <p>Barbecue Italian cuisine pizza</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='food-card'>
                  <img src={food2} alt="Food" />
                  <hr className="divider" />
                  <div className="food-info">
                    <h4>vegetables burger</h4>
                    <p>Barbecue Italian cuisine pizza</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='food-card'>
                  <img src={food2} alt="Food" />
                  <hr className="divider" />
                  <div className="food-info">
                    <h4>vegetables burger</h4>
                    <p>Barbecue Italian cuisine pizza</p>
                  </div>
                </div>
              </div>
          
          </Slider>
        </div>

        <div className="slider-arrow-mobile">
            <MdArrowBackIos className='me-4' onClick={previous} />
            <MdArrowForwardIos onClick={next} />

          </div>

        
      </div>
      
    </section>
  );
};

export default FoodItem;

