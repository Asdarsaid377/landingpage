import React, { useState, useEffect } from "react";
import { background_left, background_right } from "../../assets/icon"
import Image from "next/image"
import Gallery from "../gallery/Gallery";
import axios from "axios";

const Review = (props) => {
  const [name, setName] = useState("")
  const [testimonial, setTestimonial] = useState("")
  const [work, setWork] = useState("")
  const [profil, setprofil] = useState("")

  const getData = async () => {
    const res = await axios.get("https://api-bunka.teknologi-nusantara.com/api/service/client/landing-pages");
    setName(res.data.data.testimonial[1].name);
    setTestimonial(res.data.data.testimonial[1].testimonial);
    setWork(res.data.data.testimonial[1].work);
    setprofil("https://api-bunka.teknologi-nusantara.com/api" + res.data.data.testimonial[1].imagesUrl)
  }
  useEffect(() => {
    getData()
  }, [])

  return <div className="w-full h-full relative mb-32">
    <div className="w-[100%] h-full overflow-x-hidden justify-between flex bg-gray-100">
      <div className="w-[30%] mt-[300px] opacity-75 ml-[-220px] flex-col flex">
        <Image src={background_left} />
      </div>
      <div className="justify-center flex-col items-center ml-20">
        <div className="text-[40px] font-bold text-center text-primary">
          Apa Kata Mereka
        </div>
        <span className="text-center justify-center flex items-end">
          Saat-saat memberi mereka pengalaman terbaik
        </span>
        <div className="flex justify-center flex-col items-center">
          <div className="rounded-full mt-16 w-32 h-32">
            <img alt="" src={profil} />
          </div>
          <span className="font-bold text-[15px] mt-3">
            {name}
          </span>
          <span className="text-[15px] text-gray-500">
            {work}
          </span>
          <span className="mt-8 text-center">
            {testimonial}
          </span>
        </div>
      </div>
      <div className="w-[30%] overflow-hidden mt-[400px] mr-[-168px] opacity-75">
        <Image src={background_right} />
      </div>
    </div>
   
  </div>;
};

export default Review;
