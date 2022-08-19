import React from "react";
import Link from "next/link";
const Card = (props) => {
  return <>
    <div className="h-[421px] w-[302px] flex-row items-end relative justify-end rounded-[15px] ">
      <img src={props.gambar} alt="" className="h-[421px] w-[302px] rounded-[15px]" />
      <Link href="/list_produk">
        <button className="px-8 hover:scale-y-110 duration-300 z-30 absolute delay-200 py-2 bg-gray-100 bg-opacity-40 font-semibold text-black rounded-lg mt-[-80px] ml-3">
          {props.title}
        </button>
      </Link>
    </div>
  </>;
};

export default Card;
