import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ id, title, description }: Project) {
	return (
		<Card
			variant="outline"
			className="row-span-2 relative grid grid-rows-subgrid transition-colors hover:bg-muted/50"
		>
			<Link
				href={`/projects/${id}`}
				className="absolute inset-0 z-10"
				aria-label={title}
			/>
			<div className="space-y-2">
				<h3 className="text-foreground text-center text-xl font-medium">
					{title}
				</h3>
				<p className="text-muted-foreground text-sm">{description}</p>
			</div>
		</Card>
	);
}
