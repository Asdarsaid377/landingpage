import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../card/Card";

const Produk = () => {
	const [gambar, setGambar] = useState("");

	const getDetail = async () => {
		const res = await axios.get(
			"https://api-bunka.teknologi-nusantara.com/api/service/client/landing-pages"
		);
		setGambar(
			"https://api-bunka.teknologi-nusantara.com/api" +
				res.data.data.category[0].imagesUrl
		);
	};
	useEffect(() => {
		getDetail();
	}, []);

	return (
		<>
			<div className="w-[100%] h-auto bg-gray-100">
				<div className="flex-col flex items-center justify-center" id="Produk">
					<span className="text-primary text-center text-[40px] mb-[16px] font-bold">
						Produk Kami
					</span>
					<p>Temukan apa yang kamu butuhkan disini.</p>
				</div>
				<div className="flex justify-around items-center mx-[120px] mt-12 gap-8">
					<Card title="Folding Gate" gambar={gambar} />
					<Card title="Rooling Door" gambar={gambar} />
					<Card title="Garage Door" gambar={gambar} />
					<Card title="Folding Gate" gambar={gambar} />
				</div>
			</div>
		</>
	);
};

export default Produk;
