import type { Route } from "./+types/index";
import Hero from "./Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Developer" },
    { name: "description", content: "Custom Website Development" },
  ];
}

export default function Home() {
  // console.log("Hello from me");
  return <section>HomePage</section>;
}
