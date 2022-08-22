import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsWhatsapp } from "react-icons/bs";
import toko from "./toko.png";
import Image from "next/image";

const Navbar = () => {
	const [active, setActive] = useState("");
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
		<div>
			<div className="relative bg-white shadow">
				<nav className="py-4">
					<div className="container flex mx-auto">
						{/* sisi 1 */}
						<div className="w-1/3 flex justify-start -mr-10 items-center">
							<img src={logos} alt="" className="flex" />
							<span className="uppercase font-bold text-[16px]">{name}</span>
						</div>
						{/* sisi 2 */}
						<div className="w-1/3 flex justify-around items-center">
							<ul className="list-none flex gap-8 font-bold text-[15px]">
								<li>
									<a
										href="#Beranda"
										className="hover:cursor-pointer"
										onClick={() => setActive("Beranda")}>
										Beranda
									</a>
									{active === "Beranda" && (
										<div className="h-1 w-full rounded-full bg-red-600"></div>
									)}
								</li>
								<li>
									<a
										href="#Tentang"
										className="hover:cursor-pointer"
										onClick={() => setActive("Tentang")}>
										Tentang
									</a>
									{active === "Tentang" && (
										<div className="h-1 w-full rounded-full bg-red-600"></div>
									)}
								</li>
								<li>
									<a
										href="#Produk"
										className="hover:cursor-pointer"
										onClick={() => setActive("Produk")}>
										Produk
									</a>
									{active === "Produk" && (
										<div className="h-1 w-full rounded-full bg-red-600"></div>
									)}
								</li>
							</ul>
						</div>
						{/* sisi 3 */}
						<div className="w-1/3 flex justify-center items-center">
							<div className="flex items-center hover:scale-105 rounded-full mr-6 py-2 px-7 bg-green-50 border-green-400 border-2">
								<span className="w-6 h-6 mr-3">
									<Image src={toko} alt="" />
								</span>
								<span>Tokopedia</span>
							</div>
							<div className="flex items-center hover:scale-105 rounded-full py-3 px-7 bg-primary text-white">
								<BsWhatsapp />
								<span className="ml-3">Checkout Sekarang</span>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
