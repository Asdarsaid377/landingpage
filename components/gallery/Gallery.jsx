import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const Gallery = () => {
	const [data, setData] = useState([]);
	const getImage = async () => {
		const img = await axios.get(
			"https://api-bunka.teknologi-nusantara.com/api/service/client/landing-pages"
		);
		setData(img.data.data.galery);
	};
	useEffect(() => {
		getImage();
	}, []);

	return (
		<>
			<div className="md:flex md:justify-center md:items-center md:px-20 px-12 py-20">
				<div className="md:w-[35%] md:flex flex-col md:text-left text-center w-full md:ml-20">
					<span className="font-bold md:flex text-[40px] text-primary">
						Gallery
					</span>
					<p>
						Gambaran dari apa yang kami <br /> Lakukan dan bagaiman proses kami{" "}
						<br /> membuat produk terbaik.
					</p>
				</div>
				<section className=" z-20 text-gray-700 ">
					<div className="container py-2 mx-auto lg:pt-12 lg:px-32">
						<div className="flex flex-wrap flex-grow md:-m-2">
							{data.map((item) => {
								return (
									<div
										key={item.imagesName}
										className="flex flex-wrap flex-grow w-1/3">
										<div className="w-full p-1 md:p-2">
											<span className="block object-cover flex-wrap object-center w-full h-full rounded-lg">
												<img
													alt="gallery"
													className="rounded-lg"
													src={`https://api-bunka.teknologi-nusantara.com/api${item.imagesUrl}`}
												/>
											</span>
											<span className="block object-cover flex-wrap object-center w-full h-full rounded-lg">
												<img
													alt="gallery"
													className="rounded-lg"
													src={`https://api-bunka.teknologi-nusantara.com/api${item.imagesUrl}`}
												/>
											</span>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Gallery;
