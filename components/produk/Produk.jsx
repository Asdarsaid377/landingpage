import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../card/Card";

const Produk = () => {
	const [data, setData] = useState([]);

	const getDetail = async () => {
		const res = await axios.get(
			"https://api-bunka.teknologi-nusantara.com/api/service/client/landing-pages"
		);
		setData(res.data.data.category);
	};
	useEffect(() => {
		getDetail();
	}, []);

	return (
		<>
			<div className="w-[100%] h-auto bg-gray-100">
				<div className="flex-wrap sm:flex-col items-center md:flex-col mb-3 w-full flex justify-center">
					<span className="text-primary text-center text-[40px] mb-3 md:mb-[16px] font-bold">
						Produk Kami
					</span>
					<p>Temukan apa yang kamu butuhkan disini.</p>
				</div>
				<div className="flex-wrap md:flex justify-start items-center mx-20 md:mx-[100px] md:mt-12 gap-8">
					{data.map((item) => {
						return (
							<div className="flex flex-wrap gap-8 mt-7 md:mt-1" key={item._id}>
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
