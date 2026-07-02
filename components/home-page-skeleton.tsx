import { Card, CardTitlebar } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomePageSkeleton() {
	return (
		<main className="overflow-hidden">
			<section className="bg-background relative">
				<div
					aria-hidden
					className="mask-radial-from-40% mask-radial-to-80% mask-radial-at-top pointer-events-none absolute inset-0 opacity-[0.07]"
					style={{
						backgroundImage:
							"linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
						backgroundSize: "40px 40px",
					}}
				/>

				<div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 md:py-36">
					<div className="flex items-center justify-between gap-12 max-lg:flex-col">
						<div className="w-full max-w-xl">
							<Card
								variant="terminal"
								className="shadow-core/5 dark:shadow-black/40"
							>
								<CardTitlebar filename="~/bianz-co/whoami.sh" />
								<div className="space-y-4 p-6 text-sm leading-relaxed sm:text-base">
									<div className="flex items-center gap-2">
										<Skeleton className="h-4 w-20" />
									</div>
									<Skeleton className="ml-4 h-5 w-56" />
									<div className="flex items-center gap-2">
										<Skeleton className="h-4 w-24" />
									</div>
									<div className="ml-4 space-y-2">
										<Skeleton className="h-4 w-full max-w-md" />
										<Skeleton className="h-4 w-3/4 max-w-sm" />
									</div>
									<div className="flex items-center gap-2">
										<Skeleton className="h-4 w-36" />
									</div>
									<Skeleton className="mt-2 h-9 w-44 rounded-md" />
								</div>
							</Card>
						</div>

						<div
							aria-hidden
							className="mask-y-from-40% mask-y-to-90% relative hidden h-104 w-full max-w-xs overflow-hidden lg:block"
						>
							<div className="space-y-1">
								{Array.from({ length: 12 }).map((_, i) => (
									<div
										// biome-ignore lint/suspicious/noArrayIndexKey: decorative skeleton list
										key={i}
										className="flex items-center gap-2 px-2 py-1.5"
									>
										<span className="text-nord-frost/40 font-mono text-xs">
											$
										</span>
										<Skeleton
											className="h-3.5"
											style={{ width: `${60 + ((i * 37) % 100)}px` }}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
