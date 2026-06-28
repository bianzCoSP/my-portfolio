import type { Metadata } from "next";
import AboutPage from "@/components/about-page";

export const metadata: Metadata = {
	title: "About Me",
	description: "Info about me!",
	openGraph: {
		title: "About Me",
		description: "Info about me!",
	},
};

export default async function Page() {
	return (
		<div>
			<AboutPage />
		</div>
	);
}
