import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog Posts",
	description: "Blog Posts",
	openGraph: {
		title: "Blog Posts",
		description: "Blog Posts",
	},
};

export default async function Page() {
	return <div>I</div>;
}
