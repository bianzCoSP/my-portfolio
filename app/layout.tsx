import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { HeroHeader } from "@/components/header";

import { cn } from "@/lib/utils";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | Bianz's Portfolio",
		default: "Bianz's Portfolio",
	},
	description: "PORTFOLIO DESCRIPTION",
	openGraph: {
		title: {
			template: "%s | Bianz's Portfolio",
			default: "Bianz's Portfolio",
		},
		description: "PORTFOLIO DESCRIPTION",
		// images: "",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full",
				"antialiased",
				geistSans.variable,
				geistMono.variable,
			)}
		>
			<body className="min-h-full flex flex-col bg-background text-foreground font-(family-name:--font-geist-sans)">
				<div className="sticky top-0 z-50">
					<HeroHeader />
				</div>
				<main className="flex-1 flex-col">{children}</main>
			</body>
		</html>
	);
}
