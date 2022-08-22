import React from "react";
import Link from "next/link";

const CardList = (props) => {
	return (
		<>
			<div className="h-[421px] z-10 text-left flex-row w-[302px] rounded-[15px] ">
				<img
					src={props.gambar}
					className="rounded-[15px] h-[421px] w-[602px]"
				/>
				<Link href="/detail_produk">
					<button className="px-8 py-2 absolute -mt-[80px] text-left hover:scale-y-110 duration-300 delay-200 bg-gray-200 bg-opacity-40 font-semibold text-black rounded-lg ml-3">
						{props.jenis}
						<br />
						{props.harga}
					</button>
				</Link>
			</div>
		</>
	);
};

export default CardList;
