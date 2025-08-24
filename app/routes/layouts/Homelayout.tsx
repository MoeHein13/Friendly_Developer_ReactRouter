import { Outlet } from "react-router";
import Hero from "../home/Hero";

const HomeLayout = () => {
  return (
    <>
      <Hero name="Moe Hein Kyaw (Kelvin) " />
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
