"use client";

import Link from "next/link";
import { useActionState } from "react";
import { type EmailFormState, sendEmailAction } from "@/actions/sendemail";
import { Card, CardTitlebar } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "./submit-button";

const initialState: EmailFormState = null;

export default function ContactPage() {
	const [state, formAction] = useActionState(sendEmailAction, initialState);

	return (
		<section className="bg-background @container py-24">
			<div className="mx-auto max-w-3xl px-6">
				<div>
					<p className="text-nord-green font-mono text-sm">$ ./contact.sh</p>
					<h1 className="text-balance text-4xl font-medium sm:text-5xl">
						Get in Touch
					</h1>
					<p className="text-muted-foreground mt-4 max-w-md text-balance">
						Want to work together? Send a message and I'll respond as soon as
						possible.
					</p>
				</div>

				<div className="@xl:grid-cols-5 mt-12 grid gap-8">
					<div className="@xl:col-span-2 space-y-4 font-mono text-sm">
						<div className="flex gap-2">
							<span className="text-core shrink-0">--email</span>
							<Link
								href="mailto:hello@example.com"
								className="text-muted-foreground hover:text-core break-all"
							>
								cobjkenrick@gmail.com
							</Link>
						</div>

						<div className="flex gap-2">
							<span className="text-core shrink-0">--phone</span>
							<Link
								href="tel:+1234567890"
								className="text-muted-foreground hover:text-core"
							>
								+63-917-716-0010
							</Link>
						</div>

						<div className="flex gap-2">
							<span className="text-core shrink-0">--office</span>
							<span className="text-muted-foreground">
								Makati City, Metro Manila, Philippines
							</span>
						</div>
					</div>

					<Card variant="terminal" className="@xl:col-span-3">
						<CardTitlebar filename="~/contact/new-message.sh" />
						<form action={formAction} className="space-y-5 p-6">
							<div className="@md:grid-cols-2 grid gap-4">
								<div className="space-y-2">
									<Label htmlFor="name" className="font-mono text-sm">
										name
									</Label>
									<Input
										type="text"
										id="name"
										name="name"
										placeholder="your name"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email" className="font-mono text-sm">
										email
									</Label>
									<Input
										type="email"
										id="email"
										name="email"
										placeholder="you@example.com"
										required
									/>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="subject" className="font-mono text-sm">
									subject
								</Label>
								<Input
									type="text"
									id="subject"
									name="subject"
									placeholder="what can we build together?"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="message" className="font-mono text-sm">
									message
								</Label>
								<Textarea
									id="message"
									name="message"
									rows={4}
									placeholder="details here..."
									required
									className="min-h-28"
								/>
							</div>

							{state && (
								<p className="text-muted-foreground text-sm">
									<span className="text-nord-green">#</span> {state.message}
								</p>
							)}

							<SubmitButton />
						</form>
					</Card>
				</div>
			</div>
		</section>
	);
}
