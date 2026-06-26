import Image from "next/image";
import { notFound } from "next/navigation";
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
		<main className="max-w-2xl mx-auto p-6 space-y-4">
			<h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>

			<div className="relative w-full h-64 overflow-hidden rounded-lg">
				<Image
					src={project.imageUrl}
					alt={project.title}
					fill
					priority
					className="object-cover"
					sizes="(max-w-768px) 100vw, 700px"
				/>
			</div>

			<p className="leading-relaxed">{project.description}</p>
		</main>
	);
}
