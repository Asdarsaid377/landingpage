import React from "react";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Gallery from "../gallery/Gallery";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Produk from "../produk/Produk";
import Review from "../review/Review";

const HomePage = () => {
  return <div className="bg-gray-100">
    <div className="sticky top-0 bg-white w-full">
      <Header />
    </div>
    <Hero />
    <div className="mt-20">
      <Produk />
    </div>
    <div className="mt-20 flex flex-col bg-gray-100">
      <Review />
      {/* <Gallery /> */}
    </div>
    <div className="mt-20">
      <Contact />
      <Footer />
    </div>
  </div>;
};

export default HomePage;
