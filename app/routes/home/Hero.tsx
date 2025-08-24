import React from "react";
import { Link } from "react-router";

const Hero = (
  { name = "[NAME]" },
  text = " A mechanical engineering graduate who loves web development and building friendly web experience"
) => {
  return (
    <div className="w-full bg-gray-800 mx-auto text-center py-20 px-4 transition-colors duration-300 rounded">
      <h1 className="text-4xl font-bold ">Hi! ✋🏻I am {name}</h1>
      <p className="text-gray-200 max-w-2xl mx-auto mb-6 mt-3">{text}</p>
      <div className="flex justify-center gap-3">
        <Link
          to="/projects"
          className="border rounded bg-blue-500 px-6 py-2 border-blue-300 hover:bg-blue-700 transition "
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="text-blue-400 border border-blue-400 rounded hover:bg-blue-700 transition hover:text-white px-6 py-2"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Hero;
