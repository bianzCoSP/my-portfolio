export interface Project {
	title: string;
	imageUrl: string;
	description: string;
}

const ProjectData: Record<string, Project> = {
	"hygiene-buddy": {
		title: "Hygiene Buddy: A project",
		imageUrl: "/images/projects/placeholder.png",
		description: "kalsdjfl ajsf oiwh lkajsldfjoqwjlekajsdlfkj lajks",
	},
};

export async function getProjectById(
	projectId: string,
): Promise<Project | null> {
	const project = ProjectData[projectId];
	return project || null;
}
