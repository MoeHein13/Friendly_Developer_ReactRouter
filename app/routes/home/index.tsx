import FilterProjects from "~/components/FilterProjects";
import type { Route } from "./+types/index";
import Hero from "./Hero";
import type { ProjectType } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Developer" },
    { name: "description", content: "Custom Website Development" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: ProjectType[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);

  const data = await res.json();

  return { projects: data };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;

  console.log(projects);
  return (
    <>
      <FilterProjects projects={projects} count={4} />
    </>
  );
};

export default HomePage;
