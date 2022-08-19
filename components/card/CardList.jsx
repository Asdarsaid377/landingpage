import React from "react";
import Link from "next/link";

const CardList = (props) => {
  return <>
    <div className="h-[421px] z-10 text-left flex-row w-[302px] bg-image rounded-[15px] ">
      <Link href="/detail_produk">
        <button className="px-8 py-2 mb-20 text-left hover:scale-y-110 duration-300 delay-200 bg-gray-200 bg-opacity-40 font-semibold mt-[341px] text-black rounded-lg ml-3">
          {props.jenis}<br />
          {props.harga}
        </button>
      </Link>
    </div>
  </>;
};

export default CardList;
