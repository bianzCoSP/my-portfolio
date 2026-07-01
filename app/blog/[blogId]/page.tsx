import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Me",
	description: "Info about me!",
	openGraph: {
		title: "About Me",
		description: "Info about me!",
	},
};

export default async function Page() {
	return <div>I</div>;
}
