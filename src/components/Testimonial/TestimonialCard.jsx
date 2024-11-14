/* eslint-disable react/prop-types */
import { BsQuote } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";

const TestimonialCard = ({data}) => {
    return (
        <div>
            <div className="row g-0">
                <div className="col-md-5">
                    <div className='testi-info'>
                        <div className='comment'>
                            <BsQuote  />
                            <p> {data.text} </p>
                        </div>
                        
                        <div className='w-100 '>
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
                        <FaPlayCircle />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;