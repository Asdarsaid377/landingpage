import React, { useState, useEffect } from "react";
import dataNavbar from "../../data/Data";
import { logo } from "../../assets/icon"
import { BsWhatsapp } from "react-icons/bs";
import Image from 'next/image';
import toko from "./toko.png"
import axios from "axios";


const Header = () => {
  const [active, setActive] = useState("Beranda");
  const [logos, setLogos] = useState('/')
  const [name, setName] = useState('');

  const getData = async () => {
    const response = await axios.get("https://api-bunka.teknologi-nusantara.com/api/service/client/header");
    setLogos("https://api-bunka.teknologi-nusantara.com/api" + response.data.data.logoUrl);
    setName(response.data.data.name);
  }
  useEffect(() => {
    getData()
  }, [])

  return <>
    <nav className="w-full flex-1 flex h-[100px] items-center justify-between navbar">
      <div className="flex ml-16 items-center justify-center">
        <Image width={124} height={90} src={logo} alt="Logo Bunka" />
        <a href="/" className="cursor-pointer font-bold text-sm md:text-xl">{name}</a>
      </div>
      {/* Menu Desktop */}
      <ul className="list-none items-center gap-6 ml-16 text-center justify-center cursor-pointer flex">
        {
          dataNavbar.map((nav, index) => (
            <li key={nav.id}
              className={`text-[20px] font-bold text-red-600 ${active === nav.title ? "text-red-600" : "text-black"} gap-5`}
              onClick={() => setActive(nav.title)}
            >
              <a id={`#${nav.id}`} >{nav.title}</a>
              {
                active === nav.title && <div className="h-1 w-full bg-red-600"></div>
              }
            </li>
          ))
        }
      </ul>
      <div className="flex justify-center mr-16">
        <div className="flex w-[205px] hover:scale-110 mr-4 hover:cursor-pointer h-[48px] 
      ml-10 border-[#4F9D4E] border-[3px] bg-white items-center justify-center rounded-[28px]">
          <img src={toko} className="w-[30px] h-[30px]" />
          <span className="text-[#4F9D4E] ml-5 font-bold">Checkout</span>
        </div>
        <div className="flex w-[269px] hover:cursor-pointer hover:scale-110 hover:bg-red-400 h-[48px] ml-10 bg-[#AF0A04] items-center justify-center rounded-[28px]">
          <BsWhatsapp color="white" />
          <span className="text-white font-bold ml-5">Pesan Sekarang</span>
        </div>
      </div>
    </nav>
  </>
};
export default Header;
