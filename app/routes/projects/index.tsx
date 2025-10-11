import ProjectList from "~/components/ProjectList";
import type { Route } from "./+types/index";
import type { ProjectType } from "~/types";
import { useState } from "react";
import Pagination from "~/components/Pagination";

export const loader = async ({
  request,
}: Route.LoaderArgs): Promise<{ projects: ProjectType[] }> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await response.json();
  return { projects: data };
};

const Project = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: ProjectType[] };
  console.log(projects);

  const [selecetedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map((proj) => proj.category))];
  console.log(categories);

  const filterProjects =
    selecetedCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === selecetedCategory);

  const [currentPage, setCurrentPage] = useState(1);
  const projectPerPage = 10;

  const totalPage = filterProjects.length / projectPerPage;

  const indexOfLast = currentPage * projectPerPage;
  const indexOfFirst = indexOfLast - projectPerPage;
  const currentProjects = filterProjects.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <h1 className=" font-semibold text-white text-3xl">Projects 🚀</h1>

      <div className="flex justfy-content items-center gap-2 my-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`p-2 rounded-xl text-sm cursor-pointer
               text-gray-200 ${selecetedCategory === category ? "bg-blue-800" : "bg-gray-700"}`}
          >
            {category}
          </button>
        ))}
      </div>
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
