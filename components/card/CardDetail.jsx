import React from "react";
import Link from "next/link";

const CardDetail = (props) => {
	return (
		<>
			<div className="md:h-[421px] z-10 text-left flex-row md:w-[652px] rounded-[15px]">
				<img
					src={props.gambar}
					className="rounded-[15px] md:h-[421px] md:w-[602px]"
				/>
				<Link href="/">
					<button className="px-8 py-2 absolute -mt-[80px] text-left hover:scale-y-110 duration-300 delay-200 bg-gray-200 bg-opacity-40 font-semibold text-black rounded-lg ml-3">
						{props.jenis} <br />
						{props.harga}
					</button>
				</Link>
			</div>
		</>
	);
};

export default CardDetail;
