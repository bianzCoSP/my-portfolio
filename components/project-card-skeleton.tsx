import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectCardSkeleton() {
	return (
		<section className="bg-background @container py-24">
			<div className="mx-auto max-w-2xl px-6">
				<div>
					<div className="space-y-2">
						<Skeleton className="h-9 w-3/4 max-w-md" />
						<Skeleton className="h-9 w-1/2 max-w-xs" />
					</div>
					<div className="mt-4 space-y-2">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-5/6" />
					</div>
				</div>

				<div className="@xl:grid-cols-2 mt-12 grid gap-3 *:p-6">
					{Array.from({ length: 4 }).map((_, index) => (
						<Card
							// biome-ignore lint/suspicious/noArrayIndexKey: static list for loading skeleton ui
							key={index}
							variant="outline"
							className="row-span-2 relative grid grid-rows-subgrid overflow-hidden"
						>
							<div className="space-y-2">
								<Skeleton className="h-5 w-1/3" />
								<Skeleton className="h-4 w-full" />
							</div>
							<div className="flex h-44 items-end gap-3 pb-6 pt-12 px-2">
								<Skeleton className="h-1/3 w-full" />
								<Skeleton className="h-2/3 w-full" />
								<Skeleton className="h-1/2 w-full" />
								<Skeleton className="h-4/5 w-full" />
								<Skeleton className="h-3/4 w-full" />
								<Skeleton className="h-full w-full" />
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
