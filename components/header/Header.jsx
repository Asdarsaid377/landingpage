import React, { useState, useEffect } from "react";
import logo from "./toko.png";
import Image from "next/image";
import { close, menu, menuicon, closeicon } from "../../assets/images";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";

const LandingPage = () => {
	const [active, setActive] = useState("Beranda");
	const [mobile, setMobile] = useState(false);
	const [logos, setLogos] = useState("/");
	const [name, setName] = useState("");

	const getData = async () => {
		const response = await axios.get(
			"https://api-bunka.teknologi-nusantara.com/api/service/client/header"
		);
		setLogos(
			"https://api-bunka.teknologi-nusantara.com/api" +
				response.data.data.logoUrl
		);
		setName(response.data.data.name);
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<>
			{/* Navbar */}
			<div className="bg-white">
				<nav className=" w-full shadow h-[100px] bg-gray-200">
					<div className="flex items-center">
						{/* sisi 1 */}
						<div className="md:w-1/3 p-3 flex justify-start md:flex md:ml-12 items-center">
							<span className="md:12 w-[120px] h-[70px] lg:w-24 hover:cursor-pointer">
								<Link href="/">
									<img src={logos} alt="" />
								</Link>
							</span>
							<span className="text-black font-bold md:-ml-0 -ml-7">
								{name}
							</span>
						</div>
						{/* sisi 2 */}
						<div className="md:w-1/3 sm:flex mr-9 list-none hidden justify-center items-center flex-1">
							<ul className="list-none flex gap-9 text-black font-bold">
								<li>
									<a href="#Beranda" onClick={() => setActive("Beranda")}>
										Beranda
									</a>
									{active === "Beranda" && (
										<div className="h-1 w-full rounded-full bg-red-600"></div>
									)}
								</li>
								<li>
									<a href="#Tentang" onClick={() => setActive("Tentang")}>
										Tentang
									</a>
									{active === "Tentang" && (
										<div className="h-1 w-full rounded-full bg-red-600"></div>
									)}
								</li>
								<li>
									<a href="#Produk" onClick={() => setActive("Produk")}>
										Produk
									</a>
									{active === "Produk" && (
										<div className="h-1 w-full rounded-full bg-red-600"></div>
									)}
								</li>
							</ul>
						</div>
						{/* sisi 3 */}
						<div
							className="hidden md:flex justify-center gap-6 w-1/3
						">
							<div className="bg-white flex items-center border-green-500  border-2 rounded-full py-3 px-6">
								<div className="w-[30px] h-[30px]">
									<Image src={logo} alt="" className="w-[30px] h-[30px]" />
								</div>
								<span className="text-green-500 font-medium ml-3">
									TokoPedia
								</span>
							</div>
							<div className="bg-primary flex items-center rounded-full py-3 px-10 mr-8">
								<BsWhatsapp color="white" />
								<span className="text-white font-medium ml-3">
									Pesan Sekarang
								</span>
							</div>
						</div>
						{/* Mobile Menu */}
						<div className="sm:hidden flex flex-1 mr-6 justify-end items-center">
							<span className="max-w-[28px] max-h-[28px]">
								<Image
									src={mobile ? closeicon : menuicon}
									className="hover:cursor-pointer object-contain"
									onClick={() => setMobile(!mobile)}
								/>
							</span>
							<div
								className={`${
									!mobile ? "hidden" : "flex"
								} p-9 bg-primary absolute sidebar top-24 right-0 mx-4 min-w-[140px] rounded-xl `}>
								<ul className="list-none text-white w-full flex justify-end items-start flex-1 flex-col">
									<li className="cursor-pointer border-white border-b text-[16px]">
										<a href="#Beranda">Beranda</a>
									</li>
									<li className="cursor-pointer mt-3 border-white border-b text-[16px]">
										<a href="#Tentang">Tentang</a>
									</li>
									<li className="cursor-pointer border-white border-b mt-3 text-[16px]">
										<a href="#Produk">Produk</a>
									</li>
									<li className="cursor-pointer border-white border-b flex mt-3 text-[16px]">
										<span className="w-[15px] h-[15px]">
											<Image src={logo} alt="" />
										</span>
										<a href="#Beranda">TokoPedia</a>
									</li>
									<li className="cursor-pointer mt-3  flex items-center text-[16px]">
										<span>
											<BsWhatsapp color="white" />
										</span>
										<a href="#Beranda">CheckOut</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default LandingPage;
