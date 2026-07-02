export default function AboutPage() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				<p className="text-nord-green mb-4 font-mono text-sm md:hidden">
					$ cat about.md
				</p>
				<div className="grid gap-6 md:grid-cols-2 md:gap-12">
					<div>
						<p className="text-nord-green mb-3 hidden font-mono text-sm md:block">
							$ cat about.md
						</p>
						<h2 className="text-4xl font-medium">
							I am a driven software developer looking to build and scale
							enterprise-grade applications.
						</h2>
					</div>
					<div className="space-y-6">
						<p>
							I am deeply passionate about technology and am open to
							collaborating on building scalable, customer-ready applications
							for the web.
						</p>
						<p>
							When I'm not working on a project, I like to spend my time
							learning about low-level computing concepts, going to the gym, or
							playing online games!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
