import type { Metadata } from "next";
import HomePage from "@/components/home-page";

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
			<HomePage />
		</div>
	);
}
