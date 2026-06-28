import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
	return (
		<div className="min-h-screen flex flex-col gap-y-10 items-center justify-center">
			<h1>Resource could not be found.</h1>
			<Button variant="outline">
				<Link href="/">Return to Home</Link>
			</Button>
		</div>
	);
}
