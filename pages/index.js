import axios from "axios";
import React from "react";
import Produk from "../components/produk/Produk";
import Review from "../components/review/Review";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Whatsapp from "../components/wa/Whatsapp";
import Gallery from "../components/gallery/Gallery";
import LandingPage from "../components/header/Header";

export default function Home({ names }) {
	return (
		<>
			{/* <LandingPage /> */}
			<div className="bg-gray-100">
				<div className="sticky top-0 z-50">
					<LandingPage />
				</div>
				<div id="Beranda">
					<Hero />
				</div>
				<div className="mt-20 z-40 -mt[400px] md:-mt[400px] sticky top-[620px]">
					<Whatsapp />
				</div>
				<div className="md:mt-10 mt-2" id="Produk">
					<Produk />
				</div>
				<div className="md:mt-20 mt-10 relative md:flex md:flex-col bg-gray-100">
					<Review nama={names} />
					<div className="md:mt-96 md:absolute">
						<Gallery />
					</div>
				</div>
				<div className="md:mt-20 mt-12">
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
