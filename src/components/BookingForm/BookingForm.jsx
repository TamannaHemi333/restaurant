import { useState } from 'react';
import './BookingForm.css';
import toast from "react-hot-toast";

const BookingForm = () => {
  const [data, setData] = useState({});

  const handleData = (name, value) =>{
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    toast.success("You have successfully book a table")
    console.log(data)
    e.target.reset()
  }

  return (
    <section className='booking-section' id="book-table">
      <div className="container">
        <div className='booking-container'>
          <div className="booking-title">
              <h5>Book Now</h5>
              <h2>Book Your Table</h2>
              <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <input onBlur={(e) =>handleData("name", e.target.value)}  type="text" name="name" placeholder='Your Name*' required/>
                <input onBlur={(e) =>handleData("data", e.target.value)} type="date" name="date" placeholder='Reservation Date' />
              </div>
              <div className="col-md-6">
                <input onBlur={(e) =>handleData("email", e.target.value)} type="email" name="email"  placeholder='Your Email'/>
                <input type="number" name="totalPeople" placeholder='Total People' />
              </div>
            </div>
            
            <textarea onBlur={(e) =>handleData("message", e.target.value)} name="message" rows="5"  placeholder='Message'></textarea>
            <input  type="submit" className='book-table' value="BOOK NOW" />
            
          </form>
           

        </div>
      </div>
      
    </section>
  );
};

export default BookingForm;