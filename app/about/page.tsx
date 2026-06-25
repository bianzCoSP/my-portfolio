import type { Metadata } from "next";
import ContentSection from "@/components/about-page";

export const metadata: Metadata = {
	title: "About Me",
	description: "PORTFOLIO DESCRIPTION",
	openGraph: {
		title: "About Me",
		description: "PORTFOLIO DESCRIPTION",
		// images: "",
	},
};

export default async function Home() {
	return (
		<div>
			<ContentSection />
		</div>
	);
}
