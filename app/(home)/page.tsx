import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";

export const metadata: Metadata = {
	title: "Home | Bianz's Portfolio",
	description: "PORTFOLIO DESCRIPTION",
	openGraph: {
		title: "Home | Bianz's Portfolio",
		description: "PORTFOLIO DESCRIPTION",
	},
};

// hello from bianz!

export default function Page() {
	return (
		<div>
			<HeroSection />
		</div>
	);
}
