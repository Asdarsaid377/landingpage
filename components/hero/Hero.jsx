import React, { useState, useEffect } from "react";
import { background_left, background_right, woman } from "../../assets/icon";
import Image from "next/dist/client/image";
import { MdOutlineTimer } from "react-icons/md";
import axios from "axios";

const Hero = () => {
  const [about, setAbout] = useState("");
  const getAbout = async () => {
    const res = await axios.get("https://api-bunka.teknologi-nusantara.com/api/service/client/landing-pages");
    setAbout(res.data.data.aboutUs.desc);
    console.log(res.data);
  }
  useEffect(() => { getAbout() }, [])

  return <>
    <div className="w-[100%] relative items-start text-center justify-between flex bg-[#F8F8F8]">
      <div className="bg-image absolute left- mx-auto w-[1080px] h-[400px] rounded-md"></div>
      <div className="bg-image absolute left- mx-auto w-[1080px] h-[400px] rounded-md"></div>
      <div className="w-[550px] mt-20 opacity-75 ml-[-220px] flex">
        <Image src={background_left} priority />
      </div>
      <div className="w-[550px] mt-[300px] ml-{-168px }  opacity-75 right-0">
        <Image src={background_right} priority />
      </div>
      <div className="absolute mt-44 left-28 m-[120px] flex justify-around">
        <Image src={woman} width={900} height={900} />
        <div className=" text-left m-[50px]">
          <div className="text-primary font-bold text-[40px] mb-6">Tentang Kami</div>
          <p>
            {about}
          </p>
          <div className="text-black font-bold text-[20px] mt-6">Motto
          </div>
          <p>
            "Menciptakan keindahan dan keamanan,<br /> bersaing dalam mutu dan harga"
          </p>
        </div>

      </div>
    </div>
    <div className="flex justify-evenly mt-10 items-center gap-6">
      <div className="ml-[20px]">
        <span className="text-primary font-bold text-[40px] ">Kenapa Harus Kami</span>
        <p>Kami tidak hanya membuat dan menjual <br /> produk tapi lebih dari itu.</p>
      </div>
      <div className="w-20 h-20 rounded-2xl text-center items-center flex justify-center bg-gray-700">
        <MdOutlineTimer width={200} color="white" />
      </div>
      <div className="w-20 h-20 rounded-2xl text-center items-center flex justify-center bg-gray-700">
        <MdOutlineTimer width={200} color="white" />
      </div>
      <div className="w-20 h-20 rounded-2xl text-center items-center flex justify-center bg-gray-700">
        <MdOutlineTimer width={200} color="white" />
      </div>
    </div>
  </>;
};

export default Hero;
