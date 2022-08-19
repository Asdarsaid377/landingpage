import React, { useState } from "react";
import CardList from "../card/CardList";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Image from "next/image";

const ListProduk = () => {


  return <>
    <div className="mx-[100px]">
      <div className="text-primary">
        <a href="/" className="text-primary">Beranda/</a> <span className="font-bold text-primary">List Folding Gate</span>
      </div>
      <div className="mt-9">
        <span className="text-[40px] text-black font-bold mt-9">Semua Produk Folding Gate</span>
        <div className="flex justify-start flex-wrap items-center mt-5 z-10 gap-8 mb-8">
          <CardList
            jenis={"Super Folding Gate"}
            harga={"Rp. 1.500.000 M/2"}
          />
          <CardList
            jenis={"Super Folding Gate"}
            harga={"Rp. 1.500.000 M/2"}
          />
          <CardList
            jenis={"Super Folding Gate"}
            harga={"Rp. 1.500.000 M/2"}
          />
          <CardList
            jenis={"Super Folding Gate"}
            harga={"Rp. 1.500.000 M/2"}
          />
          <CardList
            jenis={"Super Folding Gate"}
            harga={"Rp. 1.500.000 M/2"}
          />
        </div>
      </div>
    </div>

  </>;
};

export default ListProduk;
