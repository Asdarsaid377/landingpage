import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
	const [foto, setFoto] = useState([]);
	const getImage = async () => {
		const img = await axios.get(
			"https://api-bunka.teknologi-nusantara.com/api/service/client/landing-pages"
		);
		setFoto(
			"https://api-bunka.teknologi-nusantara.com/api" +
				img.data.data.galery[0].imagesUrl
		);
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
				<section className="overflow-hidden z-20 text-gray-700 ">
					<div className="container py-2 mx-auto lg:pt-12 lg:px-32">
						<div className="flex flex-wrap flex-grow md:-m-2">
							<div className="flex flex-wrap flex-grow w-1/3">
								<div className="w-full p-1 md:p-2">
									<img
										alt="gallery"
										className="block object-cover object-center w-full h-full rounded-lg"
										src={foto}
									/>
								</div>
							</div>
							<div className="flex flex-wrap w-1/4">
								<div className="w-full p-1 md:p-2">
									<img
										alt="gallery"
										className="block object-cover object-center w-full h-full rounded-lg"
										src={foto}
									/>
								</div>
							</div>
							<div className="flex flex-wrap w-1/4">
								<div className="w-full p-1 md:p-2">
									<img
										alt="gallery"
										className="block object-cover object-center w-full h-full rounded-lg"
										src={foto}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Gallery;
