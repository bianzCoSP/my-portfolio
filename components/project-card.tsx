import Link from "next/link";
import { Card, CardTitlebar } from "@/components/ui/card";
import type { Project } from "@/lib/projects";

function slugify(title: string) {
	return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function ProjectCard({ id, title, description }: Project) {
	return (
		<Card
			variant="terminal"
			className="row-span-2 relative grid grid-rows-subgrid transition-colors hover:border-core/40"
		>
			<Link
				href={`/projects/${id}`}
				className="absolute inset-0 z-10"
				aria-label={title}
			/>
			<CardTitlebar filename={`${slugify(title)}.md`} />
			<div className="space-y-2 pt-1 pr-6 pb-6 pl-6">
				<h3 className="text-foreground text-lg font-medium">
					<span className="text-core/70 font-normal">$ </span>
					{title}
				</h3>
				<p className="text-muted-foreground text-sm">{description}</p>
			</div>
		</Card>
	);
}
