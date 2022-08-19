import React from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ListProduk from "../components/listProduk/ListProduk";
import Whatsapp from "../components/wa/Whatsapp";

const list_produk = () => {
  return <>
    <div className="bg-gray-100">
      <div className="sticky top-0 z-50 bg-white w-full">
        <Header />
      </div>
      <div className="mt-10">
        <ListProduk />
        <div className="mt-20 z-50 -mt[400px] sticky top-[620px]">
          <Whatsapp />
        </div>
      </div>
      <div className="mt-32">
        <Contact />
        <Footer />
      </div>
    </div>
  </>;
};

export default list_produk;
