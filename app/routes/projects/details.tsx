import type { Route } from "./+types/details";
import type { ProjectType } from "~/types";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

export async function clientLoader({
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
  return (
    <>
      <Link
        to="/projects"
        className="flex items-center  text-blue-400   hover:text-blue-600 mb-6  transition "
      >
        <FaArrowLeft className="mr-2" /> Back To Projects
      </Link>
      <div className="grid items-start md:grid-cols-2 gap-6">
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md "
          />
        </div>
        <div>
          <h2 className="text-blue-600 font-semibold mb-4 text-3xl">
            {project.title}
          </h2>

          <p className="text-gray-300 text-sm mb-4">
            {new Date(project.date).toLocaleDateString()}
          </p>
          <p className="text-gray-300 mb-4">{project.category}</p>

          <div className="mb-4">{project.description}</div>

          <a
            href={project.url}
            className="bg-blue-600 inline-block text-white px-6 py-3 rounded transition hover:bg-blue-800"
            target="_blank"
          >
            View Live Site ➡️
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;
