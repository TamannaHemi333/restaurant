/* eslint-disable react/prop-types */
import { BsQuote } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import shape from '../../assets/images/shape.png'
import VideoModal from "./VideoModal";
import { useState } from "react";

const TestimonialCard = ({data}) => {
    const [modalShow, setModalShow] = useState(false);
    const [url, setUrl] = useState("");

    const handleModal = (url)=>{
        setModalShow(true);
        setUrl(url)
    }

    return (
        <div>
            <div className="row g-0">
                <div className="col-md-5">
                    <div className='testi-info'>
                        <div className="shape"><img src={shape} alt="shape" /></div>
                        <div className='comment'>
                            <BsQuote  />
                            <p> {data.text} </p>
                        </div>
                        
                        <div className='client-info '>
                            <div className='d-flex justify-content-between align-items-center  '>
                                <div className='person'>
                                    <h6> {data.name}</h6>
                                    <p>{data.designation}</p>
                                </div>
                                <div>
                                    <img className='client-img' src={data.img} alt="person" />
                                </div>
                            </div>
                            <hr className='client-line' />
                            <hr className='client-line2' />
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className='testi-image'>
                        <FaPlayCircle onClick={()=>handleModal(data.url)} />
                        
                    </div>
                </div>
            </div>
            <VideoModal url={url} show={modalShow}  onHide={() => setModalShow(false)} />
        </div>
    );
};

export default TestimonialCard;