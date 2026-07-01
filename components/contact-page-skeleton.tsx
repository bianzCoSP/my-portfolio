import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ContactPageSkeleton() {
	return (
		<section className="bg-background @container py-24">
			<div className="mx-auto max-w-3xl px-6">
				<div>
					<Skeleton className="h-10 w-64 sm:h-12 sm:w-80" />
					<Skeleton className="mt-4 h-4 w-full max-w-md" />
					<Skeleton className="mt-2 h-4 w-2/3 max-w-md" />
				</div>

				<div className="@xl:grid-cols-5 mt-12 grid gap-8">
					<div className="@xl:col-span-2 space-y-6">
						<div className="space-y-2">
							<Skeleton className="h-4 w-12" />
							<Skeleton className="h-4 w-32" />
						</div>

						<div className="space-y-2">
							<Skeleton className="h-4 w-12" />
							<Skeleton className="h-4 w-28" />
						</div>

						<div className="space-y-2">
							<Skeleton className="h-4 w-12" />
							<Skeleton className="h-4 w-40" />
						</div>
					</div>

					<Card variant="outline" className="@xl:col-span-3 p-6">
						<div className="space-y-5">
							<div className="@md:grid-cols-2 grid gap-4">
								<div className="space-y-2">
									<Skeleton className="h-4 w-10" />
									<Skeleton className="h-9 w-full" />
								</div>
								<div className="space-y-2">
									<Skeleton className="h-4 w-10" />
									<Skeleton className="h-9 w-full" />
								</div>
							</div>

							<div className="space-y-2">
								<Skeleton className="h-4 w-14" />
								<Skeleton className="h-9 w-full" />
							</div>

							<div className="space-y-2">
								<Skeleton className="h-4 w-16" />
								<Skeleton className="h-28 w-full" />
							</div>

							<Skeleton className="h-9 w-28 rounded-md" />
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
}
