import React, { useState, useEffect } from "react";
import { logo } from "../../assets/icon";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import Image from "next/image"
import axios from "axios";

const Contact = ({ names }) => {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [addres, setAddres] = useState("");

  const getData = async () => {
    const response = await axios.get("https://api-bunka.teknologi-nusantara.com/api/service/client/contact-us");
    setEmail(response.data.data.email);
    setPhone(response.data.data.phone);
    setAddres(response.data.data.address);
  }
  useEffect(() => {
    getData()
  }, [])
  return <>
    <div className="grid grid-cols-3 w-full h-[439px] bg-[#212121]">
      <div className="ml-14 mt-10 h-auto">
        <div className="flex justify-center h-auto items-center">
          <Image src={logo} />
          <span className="text-white text-[18px] ml-6">PT BUNKA PANCA KARYA</span>
        </div>
        <div className="flex-col flex flex-1 ml-44 mt-[10px]">
          <span className="text-white font-semibold text-[22px]">
            Kontak Kami
          </span>
          <span className="text-[#FFFFFF] mt-5 text-[18px] font-light ">
            {addres}
          </span>
          <span className="text-[#FFFFFF] mt-5 text-[18px] font-light">
            Telephone : <span className="text-white font-semibold"> {phone}</span>
          </span>
          <span className="text-[#FFFFFF] mt-5 text-[18px] font-light">
            Email : <span className="text-white font-semibold">{email}</span>
          </span>
          <span className="flex items-center hover:cursor-pointer justify-start mt-8">
            <BsFacebook className="text-white mr-5 hover:scale-125" />
            <FaTiktok className="text-white mr-5 hover:scale-125" />
            <AiFillYoutube className="text-white mr-5 hover:scale-125" />
            <AiFillInstagram className="text-white mr-5 hover:scale-125" />
          </span>
        </div>
      </div>
      <div className="ml-20 w-[25%] mt-36">
        <span className="text-white">Link</span>
        <ul className="w-auto mt-5">
          <li className="flex-col gap-5 flex">
            <a className="hover:cursor-pointer text-white p-2" >Beranda</a>
            <a className="hover:cursor-pointer text-white p-2">Tentang</a>
            <a className="hover:cursor-pointer text-white p-2">Produk</a>
            <a className="hover:cursor-pointer text-white p-2">Tokopedia</a>
          </li>

        </ul>
      </div>
      <div className="maps flex justify-center w-[90%] items-center text-white mr-20">
        <iframe frameBorder={200} style={{ width: "100%", height: "70%", borderRadius: "20px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63468.48521907333!2d106.75725949999999!3d-6.1601685999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7c9d110d719%3A0x300c5e82dd4b8a0!2sJakarta%20Barat%2C%20Kec.%20Kb.%20Jeruk%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1660879695331!5m2!1sid!2sid" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>

      </div>
    </div>

  </>;
};

export default Contact;
