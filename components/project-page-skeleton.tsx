import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectPageSkeleton() {
	return (
		<main className="mx-auto max-w-2xl space-y-4 p-6 py-24">
			<Skeleton className="h-5 w-48" />
			<Skeleton className="h-64 w-full rounded-xl" />
		</main>
	);
}
