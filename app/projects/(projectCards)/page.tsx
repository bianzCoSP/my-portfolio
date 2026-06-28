import type { Metadata } from "next";
import ProjectCardPage from "@/components/project-card-page";

export const metadata: Metadata = {
	title: "Project Dashboard",
	description: "My previous work!",
	openGraph: {
		title: "Project Dashboard",
		description: "My previous work!",
	},
};

export default function Page() {
	return (
		<div>
			<ProjectCardPage />
		</div>
	);
}
