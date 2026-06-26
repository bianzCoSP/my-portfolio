import type { Metadata } from "next";
import ProjectPage from "@/components/project-page";

export const metadata: Metadata = {
	// TODO: this should read from project slug
	title: "Project name",
	description: "Project info here!",
	openGraph: {
		title: "About Me",
		description: "Project blurb here!",
		// images: "",
	},
};

export default async function Home() {
	return (
		<div>
			<ProjectPage />
		</div>
	);
}
