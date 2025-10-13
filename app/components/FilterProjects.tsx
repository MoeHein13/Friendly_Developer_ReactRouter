import type { ProjectType } from "~/types";
import ProjectList from "./ProjectList";

type filterType = {
  projects: ProjectType[];
  count: number;
};

const FilterProjects = ({ projects, count = 2 }: filterType) => {
  const filtered = projects.filter((proj) => proj.featured).slice(0, count);

  console.log(filtered);
  return (
    <>
      <section>
        <h1 className="text-2xl ">Filtered Projects</h1>
        <div className="grid gap-2 sm:grid-cols-2 mt-3">
          {filtered.map((project) => (
            <ProjectList key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FilterProjects;
