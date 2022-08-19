import React, { useState } from "react";
import CardList from "../card/CardList";
import Link from "next/link";

const ListProduk = () => {


  return <>
    <div className="mx-[100px]">
      <div className="text-primary">
        <Link href="/" className="text-primary">Beranda</Link>/
        <a className="font-bold text-primary">List Folding Gate</a>
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
