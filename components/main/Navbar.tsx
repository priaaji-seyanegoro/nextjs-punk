"use client";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`w-full fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50 ${isMenuOpen ? 'px-0' : 'px-10'}`}>
      <div className="w-full flex items-center justify-between m-auto px-[10px]">
        <a href="#home" className="flex items-center">
          <Image
            src="/punk.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Punk Next JS
          </span>
        </a>

        <div className="hidden md:flex flex-row gap-5 justify-between h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <a href="#home" className="cursor-pointer">
            Home
          </a>
          <a href="#skills" className="cursor-pointer">
            Service
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Responsive menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#0300145e] rounded-b-lg text-gray-200 py-2">
          <a href="#home" className="cursor-pointer py-1">
            Home
          </a>
          <a href="#skills" className="cursor-pointer py-1">
            Service
          </a>
          <a href="#projects" className="cursor-pointer py-1">
            Projects
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
