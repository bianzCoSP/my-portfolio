import type { Metadata } from "next";
import ProjectCard from "@/components/project-card";

export const metadata: Metadata = {
	title: "Project Dashboard",
	description: "PORTFOLIO DESCRIPTION",
	openGraph: {
		title: "Project Dashboard",
		description: "PORTFOLIO DESCRIPTION",
		// images: "",
	},
};

export default function Home() {
	// throw new Error("Throwing test error");
	return (
		<div>
			<ProjectCard />
		</div>
	);
}
