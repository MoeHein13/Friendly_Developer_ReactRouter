import { Link } from "react-router";
import type { ProjectType } from "~/types";

const ProjectList = ({ project }: { project: ProjectType }) => {
  return (
    <div>
      <Link
        to={project.id}
        className=" translate transition duration-300 hover:scale-[1.02] block"
      >
        <div className="border border-gray-600 rounded-lg  transition duration-300  overflow-hidden shadow-sm hover:shadow-md  ">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-40"
          />
          <div className="mt-2 p-3 flex flex-col gap-2">
            <h2 className="font-semibold text-blue-400 text-2xl">
              {project.title}
            </h2>
            <span className="text-gray-200 text-md">{project.description}</span>
            <div className="flex justify-between items-center text-sm text-gray-300">
              <span>{project.category}</span>
              <span>{new Date(project.date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectList;
