import "./App.css";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Feature from "./components/Feature/Feature";
import FoodItem from "./components/FoodItem/FoodItem";
import BookingForm from "./components/BookingForm/BookingForm";
import Header from "./components/Header/Header";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Hero />
      <About />
      <Feature />
      <FoodItem />
      <BookingForm />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;





