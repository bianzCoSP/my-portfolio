import type { Metadata } from "next";
import HomePage from "@/components/home-page";

export const metadata: Metadata = {
	title: "Home",
	description: "PORTFOLIO DESCRIPTION",
	openGraph: {
		title: "Home",
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
