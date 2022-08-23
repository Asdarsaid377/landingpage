import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
	background_left,
	background_right,
	woman,
	service,
} from "../../assets/icon";
import axios from "axios";

const Hero = () => {
	const [about, setAbout] = useState("");
	const [banner, setBanner] = useState("");
	const [motto, setMotto] = useState("");
	const [index, setIndex] = useState(0);

	setTimeout(() => {
		setIndex(index === 0 ? index + 1 : 0);
	}, 3000);

	const getAbout = async () => {
		const res = await axios.get(
			"https://api-bunka.teknologi-nusantara.com/api/service/client/landing-pages"
		);
		setAbout(res.data.data.aboutUs.desc);
		setMotto(res.data.data.aboutUs.motto);
		const img = await axios.get(
			"https://api-bunka.teknologi-nusantara.com/api/service/client/landing-pages"
		);

		setBanner(
			"https://api-bunka.teknologi-nusantara.com/api" +
				img.data.data.banner[index].bannerUrl
		);
	};

	useEffect(() => {
		getAbout();
	}, [index]);
	return (
		<>
			<div className="w-full z-20 h-full overflow-x-hidden relative">
				<div className="md:mx-20 z-30 mx-3">
					<div className="w-full rounded-2xl h-[150px] md:h-[280px] mt-5 md:my-20">
						<img src={banner} alt="" className="rounded-2xl" />
					</div>
					<div className="mt-7" id="Tentang">
						<div className="flex-wrap md:flex items-center justify-center">
							<div className=" hidden md:flex z-20 md:w-[35%] ml-20 md:ml-0">
								<Image src={woman} />
							</div>
							<div className="flex-wrap md:w-[65%] md:text-left">
								<div className="text-primary text-center font-bold md:text-left text-[40px] mb-6">
									Tentang Kami
								</div>
								<p className="md:text-left text-center">{about}</p>
								<div className="text-black text-center font-bold md:text-left text-[20px] mt-6">
									Motto
								</div>
								<p className="md:text-left text-center">{motto}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="md:mx-20 mt-12 mx-12 md:mt-20">
					<div className="md:flex w-[100%] mt-10 items-center md:gap-6">
						<div className="md:w-[35%] text-center md:text-left">
							<span className="text-primary md:text-left text-center font-bold text-[40px] ">
								Kenapa Harus Kami
							</span>
							<p>
								Kami tidak hanya membuat dan menjual <br /> produk tapi lebih
								dari itu.
							</p>
						</div>
						<div className="md:w-56 md:h-32 md:mt-0 mt-12 text-center items-center md:flex-col flex md:justify-center ">
							<Image src={service} alt="gambar" />
							<span className="text-[20px] font-bold">
								Kualitas Produk Terbaik
							</span>
						</div>
						<div className="md:w-56 md:h-32 md:mt-0 mt-12 text-center items-center md:flex-col flex md:justify-center ">
							<Image src={service} alt="gambar" className="w-20 h-20" />
							<span className="text-[20px] font-bold">Perakitan Cepat</span>
						</div>
						<div className="md:w-56 md:h-32 md:mt-0 mt-12 text-center items-center md:flex-col flex md:justify-center ">
							<Image src={service} alt="gambar" className="w-20 h-20" />
							<span className="text-[20px] font-bold">Layanan Terbaik</span>
						</div>
					</div>
				</div>
				<div className="w-[550px] hidden md:flex opacity-75 absolute top-[200px] left-[-200px] ">
					<Image src={background_left} />
				</div>
				<div className="w-[550px] hidden md:flex  opacity-75 absolute right-[-200px] bottom-0">
					<Image src={background_right} />
				</div>
			</div>
		</>
	);
};

export default Hero;
