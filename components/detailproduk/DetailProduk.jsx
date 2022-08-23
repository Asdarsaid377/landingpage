import React, { useState, useEffect } from "react";
import CardDetail from "../card/CardDetail";
import { MdOutlineDescription } from "react-icons/md";
import {
	AiFillCloseCircle,
	AiOutlineBgColors,
	AiOutlineFileProtect,
} from "react-icons/ai";
import { ImClipboard } from "react-icons/im";
import axios from "axios";
import Link from "next/link";
import parse from "html-react-parser";

const DetailProduk = () => {
	const [deskripsi, setDeskripsi] = useState("Deskripsi");
	const [gambar, setGambar] = useState();
	const [desc, setDesc] = useState();
	const [spec, setSpec] = useState();
	const [harga, setHarga] = useState();
	const [name, setName] = useState();
	const [type, setType] = useState();
	const [user, setUser] = useState();

	const getDetail = async () => {
		const res = await axios.get(
			`https://api-bunka.teknologi-nusantara.com/api/service/client/detail-product/62ff2f6c2686c5cea08bb3ea`
		);
		setGambar(
			"https://api-bunka.teknologi-nusantara.com/api" +
				res.data.data.images[0].url
		);

		setDesc(parse(res.data.data.desc));
		setSpec(parse(res.data.data.spec));
		setType(parse(res.data.data.type));
		setHarga(res.data.data.price);
		setName(res.data.data.name);
		setUser(parse(res.data.data.who_use_the_product));
	};

	useEffect(() => {
		getDetail();
	}, []);

	return (
		<div>
			<div className="md:mx-[100px] mx-12">
				<div className="text-primary">
					<Link href="/" className="hover:font-bold text-primary">
						Beranda/
					</Link>
					<Link href="/list_produk" className="hover:font-bold">
						List Folding Gate/
					</Link>
					<span className="font-bold text-primary">Detail Produk</span>
				</div>
				<div className="mt-9">
					<span className="text-[40px] text-black font-bold mt-9">{name}</span>
					<div className="md:flex justify-start items-start mt-5 z-10 mb-8">
						<CardDetail jenis={name} harga={harga} gambar={gambar} />
						<div>
							<span className="text-[40px] text-primary font-bold mt-9">
								IDR {harga} /M2
							</span>
							<ul className="list-none transform duration-700 delay-200 transition-all ease-in-out ">
								{/* Deskripsi */}
								<li
									className="flex justify-start transition-opacity duration-200 delay-200 ease-linear items-center gap-4 mt-5 cursor-pointer"
									onClick={() => setDeskripsi("Deskripsi")}>
									<a className="text-primary text-[22px]">
										<MdOutlineDescription />
									</a>
									<span className="font-bold text-[15px] transition-all duration-500">
										Deskripsi
									</span>
								</li>
								{deskripsi === "Deskripsi" && (
									<div className="h-auto w-[400px] transition-all duration-500 ease-in-out ml-10 justify-between flex delay-150 cursor-pointer">
										<div className="text-primary">{desc}</div>
										<div
											className="font-bold text-primary cursor-pointer"
											onClick={() => setDeskripsi("")}>
											{" "}
											<AiFillCloseCircle />
										</div>
									</div>
								)}
								{/* Spesifikasi */}
								<li
									className="flex justify-start cursor-pointer mt-5 items-center gap-4 "
									onClick={() => setDeskripsi("Spesifikasi")}>
									<a className="text-primary text-[22px]">
										<ImClipboard />
									</a>
									<span className="font-bold text-[15px]">Spesifikasi</span>
								</li>
								{deskripsi === "Spesifikasi" && (
									<div className="h-auto w-[400px] ml-10 justify-between flex transition-transform delay-150 duration-500 cursor-pointer">
										<div className="text-primary">{spec}</div>
										<div
											className="font-bold text-primary cursor-pointer"
											onClick={() => setDeskripsi("")}>
											<AiFillCloseCircle />
										</div>
									</div>
								)}
								{/* Pilihan */}
								<li
									className="flex justify-start cursor-pointer mt-5 items-center gap-4 "
									onClick={() => setDeskripsi("Pilihan")}>
									<a className="text-primary text-[22px]">
										<AiOutlineBgColors />
									</a>
									<span className="font-bold text-[15px]">Pilihan Warna</span>
								</li>
								{deskripsi === "Pilihan" && (
									<div className="h-auto w-[400px] ml-10 justify-between flex transition-transform delay-150 duration-500 cursor-pointer">
										<div className="text-primary">{type}</div>
										<div
											className="font-bold text-primary cursor-pointer"
											onClick={() => setDeskripsi("")}>
											{" "}
											<AiFillCloseCircle />
										</div>
									</div>
								)}
								{/* Sektor */}
								<li
									className="flex justify-start cursor-pointer mt-5 items-center gap-4 "
									onClick={() => setDeskripsi("Sektor")}>
									<a className="text-primary text-[22px]">
										<AiOutlineFileProtect />
									</a>
									<span className="font-bold text-[15px]">
										Sektor Yang Menggunakan Produk Ini
									</span>
								</li>
								{deskripsi === "Sektor" && (
									<div className="h-auto w-[400px] ml-10 justify-between flex transition-transform delay-150 duration-500 cursor-pointer">
										<div className="text-primary">{user}</div>
										<div
											className="font-bold text-primary cursor-pointer"
											onClick={() => setDeskripsi("")}>
											{" "}
											<AiFillCloseCircle />
										</div>
									</div>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailProduk;
