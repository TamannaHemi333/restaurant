import { useState } from "react";
import "./About.css";
import { MdOutlinePhoneInTalk } from "react-icons/md";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import aboutImg from '../../assets/images/about_img.png';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import sideImg  from '../../assets/images/about-side.png'




const About = () => {

  const [key, setKey] = useState('about');

  return (
    <section className="about-section">
      <div className="side-img">
          <img src={sideImg} alt="side Image" />
      </div>
      <div className="container">
        <div className="row g-5">
          <div className="col-md-6">
              <div className="about-image">
                <img src={aboutImg} alt="Market Experiences"  />
                <div className="market-experiences">
                  <div className="circle">
                    <CircularProgressbar  value={80}  text={"50+"} strokeWidth={"5"}
                        styles={buildStyles({
                          pathColor: '#FEBF00',
                          textColor: '#181818',
                          trailColor: '#EEF6FF',
                        })}
                     />;
                  </div>
                  <div >
                    <p>Market <br /> Experiences</p>
                    
                  </div>
                 
                </div>
              
              </div>
          </div>
          <div className="col-md-6">
            <div>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="about" title="About">
                  <h2 className="tab-title">Exceptional culinary experience and delicious food</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>

                  <div className="d-flex align-items-center mt-5 tab-section">
                    <button className="book-table me-5">ABOUT MORE </button>
                    <p> <MdOutlinePhoneInTalk /> <span className="ms-2">+88 3426 739 485</span></p>
                  </div>


                </Tab>
                <Tab eventKey="experience" title="Experience">
                  <h2>This is Experience Tab</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>

                    <div className="d-flex align-items-center mt-5 tab-section">
                      <button className="book-table me-5">ABOUT MORE </button>
                      <p> <MdOutlinePhoneInTalk /> <span className="ms-2">+88 3426 739 485</span></p>
                    </div>
                </Tab>
                <Tab eventKey="contact" title="Contact" >
                  <h2>This is Contact Tab</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>

                    <div className="d-flex align-items-center mt-5 tab-section">
                      <button className="book-table me-5">ABOUT MORE </button>
                      <p> <MdOutlinePhoneInTalk /> <span className="ms-2">+88 3426 739 485</span></p>
                    </div>
                </Tab>
              </Tabs>
            </div>

          </div>
        </div>
      </div>
      
    
   
    </section>
 
  )
}

export default About