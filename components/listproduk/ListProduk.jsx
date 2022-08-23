import React, { useState, useEffect } from "react";
import CardList from "../card/CardList";
import Link from "next/link";
import axios from "axios";
import Card from "../card/Card";

const ListProduk = () => {
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
			<div className="md:mx-[100px] mx-12">
				<div className="text-primary">
					<Link href="/" className="text-primary">
						Beranda
					</Link>
					/<a className="font-bold text-primary">List Folding Gate</a>
				</div>
				<div className="mt-9">
					<span className="text-[40px] text-black font-bold mt-9">
						Semua Produk Folding Gate
					</span>
					<div className="flex justify-start flex-wrap items-center mt-5 z-10 gap-8 mb-8">
						{data.map((item) => {
							return (
								<div className="" key={item._id}>
									<CardList
										id={item._id}
										jenis={item.categoryName}
										gambar={`https://api-bunka.teknologi-nusantara.com/api${item.imagesUrl}`}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default ListProduk;
