import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../card/Card";

const Produk = () => {
	// const [gambar, setGambar] = useState([]);
	const [data, setData] = useState([]);

	const getDetail = async () => {
		const res = await axios.get(
			"https://api-bunka.teknologi-nusantara.com/api/service/client/landing-pages"
		);
		setData(res.data.data.category);
		console.log(res.data);
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
					{data.map((item) => {
						return (
							<div className="flex" key={item.id}>
								<Card
									title={item.categoryName}
									gambar={`https://api-bunka.teknologi-nusantara.com/api${item.imagesUrl}`}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Produk;
