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
      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="border border-gray-600 rounded-lg -blue-800 overflow-hidden shadow-sm hover:shadow-md  "
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-40"
              />
              <div className="mt-2 p-3 flex flex-col gap-2">
                <h2 className="font-semibold text-blue-400 text-2xl">
                  {project.title}
                </h2>
                <span className="text-gray-200 text-md">
                  {project.description}
                </span>
                <div className="flex justify-between items-center text-sm text-gray-300">
                  <span>{project.category}</span>
                  <span>{new Date(project.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Project;
