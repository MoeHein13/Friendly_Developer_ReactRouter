import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Developer" },
    { name: "description", content: "Custome Website Development" },
  ];
}

export default function Home() {
  // console.log("Hello from me");
  return <section>My App</section>;
}
