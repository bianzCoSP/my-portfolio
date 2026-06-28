import type { Metadata } from "next";
import ContactPage from "@/components/contact-page";

export const metadata: Metadata = {
	title: "Contact",
	description: "Let's get in touch!",
	openGraph: {
		title: "Contact",
		description: "Let's get in touch!",
	},
};

export default function Page() {
	return (
		<div>
			<ContactPage />
		</div>
	);
}
