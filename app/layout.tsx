import type { Metadata } from "next";
import "./globals.css";

import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-mono-terminal",
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
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			suppressHydrationWarning
			lang="en"
			className={cn("h-full", "antialiased", jetbrainsMono.variable)}
		>
			<body className="min-h-full flex flex-col bg-background text-foreground">
				<ThemeProvider attribute="class" enableSystem defaultTheme="system">
					<Header />
					<main className="flex flex-1 flex-col">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
