import type { Route } from "./+types/index";
import type { ProjectType } from "~/types";

export const loader = async ({
  request,
}: Route.LoaderArgs): Promise<{ projects: ProjectType[] }> => {
  const response = await fetch("http://localhost:8000/projects");
  const data = await response.json();
  return { projects: data };
};

const Project = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: ProjectType[] };
  console.log(projects);
  return (
    <>
      <h1 className=" font-semibold text-white text-3xl">Projects 🚀</h1>
      <div className="grid gap-6 sm:grid-cols-2"></div>
    </>
  );
};

export default Project;
