import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
	return (
		<div className="flex flex-col items-center justify-center flex-1 w-full gap-y-10">
			<Image
				src="/images/access-denied.png"
				width={150}
				height={150}
				alt="Access Denied Icon"
				loading="eager"
			/>
			<h1>Resource could not be found</h1>
			<Button variant="outline">
				<Link href="/">Return to Home</Link>
			</Button>
		</div>
	);
}
