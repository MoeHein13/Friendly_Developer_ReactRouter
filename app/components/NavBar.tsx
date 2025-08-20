import { NavLink } from "react-router";
import { FaLaptopCode } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 border-gray-400 px-4 py-4 flex justify-between sticky">
      <NavLink
        to="/"
        className="flex items-center space-x-2 text-lg font-bold text-blue-300"
      >
        <FaLaptopCode className="text-blue-400 text-xl" />

        <span>The Friendly Developer</span>
      </NavLink>
      <div className="hidden md:flex items-center gap-6">
        <div className="space-x-3 text-gray-300 text-sm  ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
