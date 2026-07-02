import { notFound } from "next/navigation";
import { Card, CardTitlebar } from "@/components/ui/card";
import { getProjectById } from "@/lib/projects";

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ projectId: string }>;
}) {
	const { projectId } = await params;
	const project = await getProjectById(projectId);

	if (!project) {
		notFound();
	}

	return (
		<main className="mx-auto max-w-2xl space-y-4 p-6 py-24">
			<p className="text-nord-green font-mono text-sm">
				$ cd ~/projects/{projectId}
			</p>
			<Card variant="terminal">
				<CardTitlebar
					filename={`${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.md`}
				/>
				<div className="space-y-4 p-6">
					<h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
					<p className="text-muted-foreground leading-relaxed">
						{project.description}
					</p>
				</div>
			</Card>
		</main>
	);
}
