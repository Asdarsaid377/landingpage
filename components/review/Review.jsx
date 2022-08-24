import React, { useState, useEffect } from "react";
import { background_left, background_right } from "../../assets/icon";
import Image from "next/image";
import axios from "axios";
import { GrPrevious, GrNext } from "react-icons/gr";

const Review = (props) => {
	const [name, setName] = useState("");
	const [testimonial, setTestimonial] = useState("");
	const [work, setWork] = useState("");
	const [profil, setprofil] = useState("");
	const [index, setIndex] = useState(0);

	const getData = async () => {
		const res = await axios.get(
			"https://api-bunka.teknologi-nusantara.com/api/service/client/landing-pages"
		);
		setName(res.data.data.testimonial[index].name);
		setTestimonial(res.data.data.testimonial[index].testimonial);
		setWork(res.data.data.testimonial[index].work);
		setprofil(
			"https://api-bunka.teknologi-nusantara.com/api" +
				res.data.data.testimonial[index].imagesUrl
		);
	};

	console.log(index);
	useEffect(() => {
		getData();
	}, [index]);

	return (
		<div className="w-full h-full relative">
			<div className="w-[100%] h-[400px] md:h-full overflow-x-hidden justify-between flex bg-gray-100">
				<div className="w-[30%] mt-[300px] opacity-75 ml-[-220px] flex-col flex">
					<Image src={background_left} />
				</div>
				<div className="justify-center flex-col items-center ml-14 md:ml-20">
					<div className="text-[40px] font-bold text-center text-primary">
						Apa Kata Mereka
					</div>
					<span className="text-center justify-center flex items-end">
						Saat-saat memberi mereka pengalaman terbaik
					</span>
					<div className="flex flex-col mt-16 items-center">
						<div className="rounded-full w-full items-center flex justify-center md:gap-48 gap-24 mx-[100px]">
							<button
								className="hover:scale-125 shadow-lg rounded-full"
								onClick={() => setIndex(index <= 0 ? index + 1 : 0)}>
								<GrPrevious />
							</button>
							<img alt="" src={profil} className="w-32 rounded-full h-32" />
							<button
								className="hover:scale-125 shadow-lg rounded-full"
								onClick={() => setIndex(index >= 1 ? (index = 0) : index + 1)}>
								<GrNext />
							</button>
						</div>
						<span className="font-bold text-[15px] mt-3">{name}</span>
						<span className="text-[15px] text-gray-500">{work}</span>
						<span className="px-24 text-center">{testimonial}</span>
					</div>
				</div>
				<div className="w-[30%] overflow-hidden mt-[400px] mr-[-168px] opacity-75">
					<Image src={background_right} />
				</div>
			</div>
		</div>
	);
};

export default Review;
