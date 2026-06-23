import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description: "PORTFOLIO DESCRIPTION",
	openGraph: {
		title: "Contact",
		description: "PORTFOLIO DESCRIPTION",
		// images: "",
	},
};

export default function Home() {
	return (
		<div>
			<h1>Hello CONTACT!</h1>
		</div>
	);
}
