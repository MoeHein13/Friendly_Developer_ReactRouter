import type { Route } from "./+types/details";
import type { ProjectType } from "~/types";

export async function clientLLoader({
  request,
  params,
}: Route.ClientLoaderArgs): Promise<ProjectType> {
  const response = await fetch(`http://localhost:8000/projects/${params.id}`);
  if (!response.ok)
    throw new Response(`The Project not Found`, { status: 404 });
  const project: ProjectType = await response.json();
  return project;
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export const ProjectDetailPage = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData;
  console.log(project);
  return <div>Project Details</div>;
};

export default ProjectDetailPage;
