import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 h-[100px] flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Your Logo</div>

        {/* Hamburger icon for small screens */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
        </div>
        
        {/* Navigation links */}
        <div
          className={`${isMenuOpen ? "block absolute right-0" : "hidden"} lg:flex lg:space-x-4`}
        >
          <div className={`${isMenuOpen ? " border-2 border-black flex flex-col absolute top-[50px] left-[-100vw]" : "flex flex-row"}`}>
            <a href="#" className={`p-4 text-white ${isMenuOpen ? " bg-slate-600 hover:bg-slate-500 w-[100vw]" : ""} hover:text-gray-300`}>
              Home
            </a>
            <a href="#" className={`p-4 text-white ${isMenuOpen ? " bg-slate-600 hover:bg-slate-500 w-[100vw]" : ""} hover:text-gray-300`}>
              About
            </a>
            <a href="#" className={`p-4 text-white ${isMenuOpen ? " bg-slate-600 hover:bg-slate-500 w-[100vw]" : ""} hover:text-gray-300`}>
              Services
            </a>
            <a href="#" className={`p-4 text-white ${isMenuOpen ? " bg-slate-600 hover:bg-slate-500 w-[100vw]" : ""} hover:text-gray-300`}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
