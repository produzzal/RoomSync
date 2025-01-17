import React from "react";
import Header from "../components/section/Header";
import Services from "../components/section/Services";
import WhyChooseUs from "../components/section/WhyChooseUs";
import BookingProcess from "../components/section/BookingProcess";
import CustomerTestimonials from "../components/section/CustomerTestimonials";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Services />
      <WhyChooseUs />
      <BookingProcess />
      <CustomerTestimonials />
    </div>
  );
};

export default Home;
