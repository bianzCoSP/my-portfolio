"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
	return (
		<div className="min-h-screen flex flex-col gap-y-10 items-center justify-center">
			<h1>An error has occurred.</h1>
			<Button variant="outline">
				<Link href="/">Return to Home</Link>
			</Button>
		</div>
	);
}
