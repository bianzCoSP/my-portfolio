import { promises as fs } from "node:fs";

export interface Project {
	id: string;
	title: string;
	description: string;
}

async function getProjectData(): Promise<Record<string, Project>> {
	const raw = await fs.readFile(`${process.cwd()}/lib/projects.json`, "utf8");
	return JSON.parse(raw);
}

export async function getProjectById(
	projectId: string,
): Promise<Project | null> {
	const data = await getProjectData();
	return data[projectId] ?? null;
}

export async function getAllProjects(): Promise<Project[]> {
	const data = await getProjectData();
	return Object.values(data);
}
