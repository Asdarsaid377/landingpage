import React from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import ListProduk from "../components/listProduk/ListProduk";
import Whatsapp from "../components/wa/Whatsapp";
import Header from "../components/header/Header";

const list_produk = () => {
	return (
		<>
			<div className="bg-white relative">
				<div className="sticky top-0 z-50 bg-white w-full">
					<Header />
				</div>
				<div className="mt-10">
					<ListProduk />
					<div className="mt-20 md:-mt[400px] sticky">
						<Whatsapp />
					</div>
				</div>
				<div className="mt-32">
					<Contact />
					<Footer />
				</div>
			</div>
		</>
	);
};

export default list_produk;
