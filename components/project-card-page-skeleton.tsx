import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectCardPageSkeleton() {
	return (
		<section className="bg-background @container py-24">
			<div className="mx-auto max-w-2xl px-6">
				<div>
					<Skeleton className="h-4 w-32" />
					<div className="mt-2 space-y-2">
						<Skeleton className="h-9 w-3/4 max-w-md" />
						<Skeleton className="h-9 w-1/2 max-w-xs" />
					</div>
					<div className="mt-4 space-y-2">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-5/6" />
					</div>
				</div>

				<div className="@xl:grid-cols-2 mt-12 grid gap-3">
					{Array.from({ length: 4 }).map((_, index) => (
						<Skeleton
							// biome-ignore lint/suspicious/noArrayIndexKey: static list for loading skeleton ui
							key={index}
							className="h-50 w-full rounded-xl"
						/>
					))}
				</div>
			</div>
		</section>
	);
}
