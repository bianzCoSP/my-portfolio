"use client";

import Link from "next/link";
import { useActionState } from "react";
import { type EmailFormState, sendEmailAction } from "@/actions/sendemail";
import { Card } from "@/components/ui/card";
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
					<h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl">
						Get in Touch
					</h1>
					<p className="text-muted-foreground mt-4 max-w-md text-balance">
						Want to work together? Send a message and I'll respond as soon as
						possible.
					</p>
				</div>

				<div className="@xl:grid-cols-5 mt-12 grid gap-8">
					<div className="@xl:col-span-2 space-y-6 *:space-y-2">
						<div>
							<p className="text-foreground text-sm font-medium">Email</p>
							<Link
								href="mailto:hello@example.com"
								className="text-muted-foreground hover:text-primary text-sm"
							>
								cobjkenrick@gmail.com
							</Link>
						</div>

						<div>
							<p className="text-foreground text-sm font-medium">Phone</p>
							<Link
								href="tel:+1234567890"
								className="text-muted-foreground hover:text-primary text-sm"
							>
								+63-917-716-0010
							</Link>
						</div>

						<div>
							<p className="text-foreground text-sm font-medium">Office</p>
							<p className="text-muted-foreground text-sm">
								Makati City, Metro Manila, Philippines
							</p>
						</div>
					</div>

					<Card variant="outline" className="@xl:col-span-3 p-6">
						<form action={formAction} noValidate className="space-y-5">
							<div className="@md:grid-cols-2 grid gap-4">
								<div className="space-y-2">
									<Label htmlFor="name" className="text-sm">
										Name
									</Label>
									<Input
										type="text"
										id="name"
										name="name"
										placeholder="Your name"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email" className="text-sm">
										Email
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
								<Label htmlFor="subject" className="text-sm">
									Subject
								</Label>
								<Input
									type="text"
									id="subject"
									name="subject"
									placeholder="What can we build together?"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="message" className="text-sm">
									Message
								</Label>
								<Textarea
									id="message"
									name="message"
									rows={4}
									placeholder="Details here..."
									required
									className="min-h-28"
								/>
							</div>

							{state && <p>{state.message}</p>}

							<SubmitButton />
						</form>
					</Card>
				</div>
			</div>
		</section>
	);
}
