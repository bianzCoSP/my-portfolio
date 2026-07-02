import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardTitlebar } from "@/components/ui/card";

const cmds = [
	"npm run build",
	"git commit -m 'ship it'",
	"docker compose up -d",
	"curl -sL api.stripe.com/v1/webhooks",
	"psql -d production -c 'select 1'",
	"vercel deploy --prod",
	"pnpm test --watch",
	"terraform apply",
	"ssh bianz@prod-01",
	"tail -f app.log",
	"kubectl get pods -n web",
	"gh pr merge --squash",
];

export default function HeroSection() {
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
									<p>
										<span className="text-nord-green">$</span>{" "}
										<span className="text-muted-foreground">whoami</span>
									</p>
									<p className="text-foreground pl-4 font-semibold">
										Bianz — Software Developer
									</p>

									<p>
										<span className="text-nord-green">$</span>{" "}
										<span className="text-muted-foreground">cat about.md</span>
									</p>
									<p className="text-muted-foreground pl-4">
										Driven software developer building and scaling
										enterprise-grade applications for the web.
									</p>

									<p>
										<span className="text-nord-green">$</span>{" "}
										<span className="text-muted-foreground">
											./start-building.sh
										</span>
										<span className="terminal-cursor" />
									</p>

									<Button className="mt-2" variant="terminal" size="sm" asChild>
										<Link href="/">
											<span className="text-nowrap">run start-building</span>
											<ChevronRight className="opacity-60" />
										</Link>
									</Button>
								</div>
							</Card>
						</div>

						<div
							aria-hidden
							className="mask-y-from-40% mask-y-to-90% relative hidden h-104 w-full max-w-xs overflow-hidden lg:block"
						>
							<div className="animate-[scroll-cmds_22s_linear_infinite] space-y-1">
								{[...cmds, ...cmds].map((cmd, i) => (
									<div
										// biome-ignore lint/suspicious/noArrayIndexKey: decorative looping list
										key={i}
										className="text-muted-foreground/70 flex items-center gap-2 px-2 py-1.5 font-mono text-xs"
									>
										<span className="text-nord-frost">$</span>
										<span className="text-nowrap">{cmd}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<style>{`
					@keyframes scroll-cmds {
						from { transform: translateY(0); }
						to { transform: translateY(-50%); }
					}
				`}</style>
			</section>
		</main>
	);
}
