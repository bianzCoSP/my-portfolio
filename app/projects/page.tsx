import type { Metadata } from "next";
import ProjectCard from "@/components/project-card";

export const metadata: Metadata = {
	title: "Project Dashboard",
	description: "My previous work!",
	openGraph: {
		title: "Project Dashboard",
		description: "My previous work!",
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
