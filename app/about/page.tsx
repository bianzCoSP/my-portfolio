import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Me",
	description: "PORTFOLIO DESCRIPTION",
	openGraph: {
		title: "About Me",
		description: "PORTFOLIO DESCRIPTION",
		// images: "",
	},
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
	await delay(2000);

	return (
		<div>
			<h1>Hello ABOUT!</h1>
		</div>
	);
}
