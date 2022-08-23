import React from "react";
import { ImWhatsapp } from "react-icons/im";

const Whatsapp = () => {
	return (
		<>
			<div className="flex justify-end relative mr-10 md:mr-20">
				<div className="flex justify-end items-center absolute z-30 w-[232px] h-[64px]">
					<div className="bg-white flex-col shadow-lg flex justify-center items-end rounded-lg px-2 h-[52px] w-[160px]">
						<span className="text-gray-400">Butuh bantuan? </span>
						<span className="text-bold"> Chat dengan kami</span>
					</div>
					<span>
						<div className="bg-green-700 flex items-center justify-center rounded-full ml-4 w-[64px] h-[64px] ">
							<a href="https://api.whatsapp.com/send?phone=6285887830864">
								<ImWhatsapp className="text-white text-center text-[20px]" />
							</a>
						</div>
					</span>
				</div>
			</div>
		</>
	);
};

export default Whatsapp;
