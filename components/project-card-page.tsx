import ProjectCard from "@/components/project-card";
import { getAllProjects } from "@/lib/projects";

export default async function ProjectCardPage() {
	const projects = await getAllProjects();

	return (
		<section className="bg-background @container py-24">
			<div className="mx-auto max-w-2xl px-6">
				<div>
					<p className="text-nord-green font-mono text-sm">$ ls ~/projects</p>
					<h2 className="text-balance text-4xl font-medium">Projects</h2>
					<p className="text-muted-foreground mt-2 text-balance">
						{/** biome-ignore lint/suspicious/noCommentText: stylized text */}
						// some of my previous work
					</p>
				</div>
				<div className="@xl:grid-cols-2 mt-12 grid gap-3">
					{projects.map((project) => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>
			</div>
		</section>
	);
}
