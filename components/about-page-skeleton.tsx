import { Skeleton } from "@/components/ui/skeleton";

export default function AboutPageSkeleton() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<Skeleton className="mb-4 h-4 w-28" />
				<div className="grid gap-6 md:grid-cols-2 md:gap-12">
					<div className="space-y-3">
						<Skeleton className="h-9 w-full" />
						<Skeleton className="h-9 w-4/5" />
					</div>

					<div className="space-y-6">
						<div className="space-y-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-5/6" />
						</div>

						<div className="space-y-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-2/3" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
