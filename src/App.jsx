import React from "react";
import Navbar from "./components/Header";
import Staff from "./components/Staff";
import BookingForm from "./components/Form";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900">
      <Navbar />
      <Hero/>
      <BookingForm />
      <Staff />
      <Footer/>
    </div>
  );
}

export default App;