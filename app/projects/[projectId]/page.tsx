import type { Metadata } from "next";
import ProjectPage from "@/components/project-page";

type Props = {
	params: Promise<{ projectId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { projectId } = await params;

	return {
		title: `Project: ${projectId}`,
		description: `Project info for ${projectId}!`,
		openGraph: {
			title: `About ${projectId}`,
			description: `Project blurb for ${projectId}!`,
		},
	};
}

export default async function Home({ params }: Props) {
	return (
		<div>
			<ProjectPage params={params} />
		</div>
	);
}
