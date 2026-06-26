import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";

export const metadata: Metadata = {
	title: "Home | Bianz's Portfolio",
	description: "PORTFOLIO DESCRIPTION",
	openGraph: {
		title: "Home | Bianz's Portfolio",
		description: "PORTFOLIO DESCRIPTION",
		// images: "",
	},
};

// hello from bianz!

export default function Home() {
	return (
		<div>
			<HeroSection />
		</div>
	);
}
