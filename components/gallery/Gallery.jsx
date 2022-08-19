import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [foto, setFoto] = useState();

  const getImage = async () => {
    const img = await axios.get("https://api-bunka.teknologi-nusantara.com/api/service/client/landing-pages")
    setFoto("https://api-bunka.teknologi-nusantara.com/api" + img.data.data.galery[0].imagesUrl);
  }
  useEffect(() => {
    getImage()
  }, [])

  return <>
    <div className="flex justify-center items-center">
      <span className="w-[35%] ml-20">
        <span className="font-bold text-[40px] text-primary">Gallery</span>
        <p>Gambaran dari apa yang kami <br /> Lakukan  dan bagaiman proses kami <br /> membuat produk terbaik.</p>
      </span>
      <section className="overflow-hidden z-20 text-gray-700 ">
        <div className="container py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap flex-grow md:-m-2">
            <div className="flex flex-wrap flex-grow w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={foto} />
              </div>
            </div>
            <div className="flex flex-wrap w-1/4">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/4">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
              </div>
            </div>
            <div className="flex flex-wrap w-[25%]">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
              </div>
            </div>
            <div className="flex w-[35%]">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
              </div>
            </div>
            <div className="flex flex-wrap w-[40%]">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  </>;
};

export default Gallery;
