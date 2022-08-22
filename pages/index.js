import axios from "axios";
import React from "react";
import Header from "../components/header/Header";
import Produk from "../components/produk/Produk";
import Review from "../components/review/Review";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero2";
import Whatsapp from "../components/wa/Whatsapp";
import Navbar from "../components/header/Navbar";
import Gallery from "../components/gallery/Gallery";

export default function Home({ names }) {
	return (
		<>
			<div className="bg-gray-100 relative">
				<div className="sticky top-0 z-40 bg-white w-full">
					<Navbar />
				</div>
				<Hero />
				<div className="mt-20 z-50 -mt[400px] sticky top-[620px]">
					<Whatsapp />
				</div>
				<div className="mt-20">
					<Produk />
				</div>
				<div className="mt-20 relative flex flex-col bg-gray-100">
					<Review nama={names} />
					<div className="absolute mt-96">
						<Gallery />
					</div>
				</div>
				<div className="mt-20">
					<Contact />
					<Footer />
				</div>
			</div>
		</>
	);
}
export async function getServerSideProps() {
	const res = await axios.get(
		"https://api-bunka.teknologi-nusantara.com/api/service/client/landing-pages"
	);
	return {
		props: {
			names: res.data.data.testimonial[1].name,
		},
	};
}
