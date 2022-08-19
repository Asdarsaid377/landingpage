import React, { useState, useEffect } from "react";
import { background_left, background_right, woman, service } from "../../assets/icon";
// import service from "../../assets/icon/service.svg"
import Image from "next/image"
import { MdOutlineTimer } from "react-icons/md";
import axios from "axios";

const Hero = () => {
  const [about, setAbout] = useState("");
  const [banner, setBanner] = useState("");
  const [motto, setMotto] = useState("");

  const getAbout = async () => {
    const res = await axios.get("https://api-bunka.teknologi-nusantara.com/api/service/client/landing-pages");
    setAbout(res.data.data.aboutUs.desc);
    setMotto(res.data.data.aboutUs.motto);
    const img = await axios.get("https://api-bunka.teknologi-nusantara.com/api/service/client/landing-pages")
    setBanner("https://api-bunka.teknologi-nusantara.com/api" + img.data.data.banner[0].bannerUrl);
    console.log(banner);
  }

  useEffect(() => {
    getAbout();
  }, [])
  return <>
    <div className="relative items-start text-center overflow-x-hidden bg-[#F8F8F8] px-20">
      <div className="h-[300px] rounded-xl mt-20 bg-red-500" id="carousel-top">
        <img src={banner} className="rounded-lg z-10" />
      </div>
      <div className="flex justify-center mt-20 gap-12 my-10 mx-32 items-center">
        <div className="image w-[30%] h-[537px] relative">
          <Image src={woman} priority layout="fill" alt="gambar" />
        </div>
        <div className="content w-[70%] text-left" >
          <div className="text-primary font-bold text-[40px] mb-6">Tentang Kami</div>
          <p>
            {about}
          </p>
          <div className="text-black font-bold text-[20px] mt-6">Motto
          </div>
          <p>
            {motto}
          </p>
        </div>
      </div>
      <div id="content2 mt-20">
        <div className="flex justify-evenly w-[100%] mt-10 items-center gap-6">
          <div className="w-[35%]">
            <span className="text-primary font-bold text-[40px] ">Kenapa Harus Kami</span>
            <p>Kami tidak hanya membuat dan menjual <br /> produk tapi lebih dari itu.</p>
          </div>
          <div className="w-56 h-32 rounded-2xl text-center items-center flex-col flex justify-center ">
            <Image src={service} alt="gambar" className="w-20 h-20" />
            <span className="text-[20px] font-bold">Kualitas Produk Terbaik</span>
          </div>
          <div className="w-56 h-32 rounded-2xl text-center items-center flex-col flex justify-center ">
            <Image src={service} alt="gambar" className="w-20 h-20" />
            <span className="text-[20px] font-bold">Perakitan Cepat</span>
          </div>
          <div className="w-56 h-32 rounded-2xl text-center items-center flex-col flex justify-center ">
            <Image src={service} alt="gambar" className="w-20 h-20" />
            <span className="text-[20px] font-bold">Layanan Terbaik</span>
          </div>
        </div>
      </div>
      <div className="w-[550px] opacity-75 z-0  absolute top-[200px] left-[-200px] ">
        <Image src={background_left} priority />
      </div>

      <div className="w-[550px] opacity-75 z-0 absolute right-[-200px] bottom-0">
        <Image src={background_right} priority />
      </div>
    </div>
  </>;
};

export default Hero;
