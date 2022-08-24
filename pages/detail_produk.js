import React from "react";
import Contact from "../components/contact/Contact";
import DetailProduk from "../components/detailproduk/DetailProduk";
import Footer from "../components/footer/Footer";
import Whatsapp from "../components/wa/Whatsapp";
import Header from "../components/header/Header";

const detail_produk = () => {
	return (
		<div>
			<div className="bg-gray-100 h-[100%]">
				<div className="z-40 -mt[420px] md:-mt[400px] sticky top-[650px]">
					<Whatsapp />
				</div>
				<div className="sticky top-0 z-40 bg-white w-full">
					<Header />
				</div>
				<div className="mt-10">
					<DetailProduk />
				</div>
				<div className="mt-32">
					<Contact />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default detail_produk;
