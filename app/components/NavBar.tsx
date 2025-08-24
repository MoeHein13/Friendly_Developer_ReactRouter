import { NavLink } from "react-router";
import { FaLaptopCode, FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const NavBar = () => {
  const base = "text-gray-300  ";
  const active = "text-blue-400 font-bold";

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClickMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const renderResponsiveMenu = (
    <div className="bg-gray-600 p-4 md:hidden">
      <div className="space-x-3 text-gray-300 text-sm flex justify-between ">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? active : base)}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? active : base)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? active : base)}
        >
          Blog
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? active : base)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? active : base)}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
  return (
    <>
      <nav className="bg-gray-800 border-gray-400 px-4 py-4 flex justify-between sticky items-center top-0 z-50">
        <NavLink
          to="/"
          className="flex items-center space-x-2 text-lg font-bold text-blue-300"
        >
          <FaLaptopCode className="text-blue-400 text-xl" />

          <span>The Friendly Developer</span>
        </NavLink>
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-3 text-gray-300 text-sm  ">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? active : base)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Contact
            </NavLink>
          </div>
        </div>
        {menuOpen ? (
          <ImCross
            onClick={handleClickMenu}
            className="text-blue-400 cursor-pointer md:hidden"
          />
        ) : (
          <FaBars
            className=" text-blue-400 cursor-pointer flex  md:hidden"
            onClick={handleClickMenu}
          />
        )}
      </nav>
      {menuOpen && renderResponsiveMenu}
    </>
  );
};

export default NavBar;
