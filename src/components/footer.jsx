import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-gray-800 flex items-center justify-evenly">
        <div>
          <div className="text-white text-2xl font-bold">Your Logo</div>
        </div>
        <div>
          <nav className="flex text-white flex-col">
            <a href="#" className=" py-2">
              Home
            </a>
            <a href="#" className=" py-2">
              About
            </a>
            <a href="#" className=" py-2">
              Services
            </a>
            <a href="#" className=" py-2">
              Contact
            </a>
          </nav>
        </div>
        <div>
          <div className="flex text-white flex-col">
            <a href="#" className=" py-2">
              Home
            </a>
            <a href="#" className=" py-2">
              About
            </a>
            <a href="#" className=" py-2">
              Services
            </a>
            <a href="#" className=" py-2">
              Contact
            </a>
          </div>
        </div>
      </footer>
      <hr className="text-white" />
      <div>created by Aanand Raj</div>
    </>
  );
};

export default Footer;
