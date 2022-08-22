import React from "react";
import Contact from "../components/contact/Contact";
import DetailProduk from "../components/detailproduk/DetailProduk";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Whatsapp from "../components/wa/Whatsapp";

const detail_produk = () => {
	return (
		<div>
			<div className="bg-gray-100 h-[100%]">
				<div className="sticky top-0 z-40 bg-white w-full">
					<Navbar />
				</div>
				<div className="mt-10">
					<DetailProduk />
					<div className="mt-20 z-50 -mt[400px] sticky top-[620px]">
						<Whatsapp />
					</div>
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
