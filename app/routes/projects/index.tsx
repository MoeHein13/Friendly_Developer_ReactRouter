import ProjectList from "~/components/ProjectList";
import type { Route } from "./+types/index";
import type { ProjectType } from "~/types";
import { useState } from "react";
import Pagination from "~/components/Pagination";

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

  const [currentPage, setCurrentPage] = useState(1);
  const projectPerPage = 2;

  const totalPage = projects.length / projectPerPage;

  const indexOfLast = currentPage * projectPerPage;
  const indexOfFirst = indexOfLast - projectPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <h1 className=" font-semibold text-white text-3xl">Projects 🚀</h1>
      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        {currentProjects.map((project) => (
          <ProjectList key={project.id} project={project} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />
    </>
  );
};

export default Project;
