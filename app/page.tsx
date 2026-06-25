import type { Metadata } from "next";

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
	return <div>Homepage</div>;
}
