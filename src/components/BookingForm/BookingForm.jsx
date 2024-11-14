import './BookingForm.css'

const BookingForm = () => {
  return (
    <section className='booking-section'>
      <div className="container">
        <div className='booking-container'>
          <div className="booking-title">
              <h5>Book Now</h5>
              <h2>Book Your Table</h2>
              <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
          </div>
          <form>
            <div className="row">
              <div className="col-md-6">
                <input  type="text" name="name" placeholder='Your Name*'/>
                <input type="date" name="date" placeholder='Reservation Date' />
              </div>
              <div className="col-md-6">
                <input type="email" name="email"  placeholder='Your Email'/>
                <input type="number" name="totalPeople" placeholder='Total People' />
              </div>
            </div>
            
            <textarea name="message" rows="5"  placeholder='Message'></textarea>
            <input type="submit" className='book-table' value="BOOK NOW" />
            
          </form>
          

        </div>
      </div>
      
    </section>
  );
};

export default BookingForm;