import type { Metadata } from "next";
import Contact from "@/components/contact-page";

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
			<Contact />
		</div>
	);
}
