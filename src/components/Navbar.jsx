"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "/public/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const menu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Projects",
      link: "/projects",
    },
    {
      id: 4,
      title: "Blog",
      link: "/blog",
    },
  ];

  return (
    <nav>
      <div
        className={`p-3 md:px-5 md:py-3 xl:py-5 xl:px-8 flex items-center shadow-xl shadow-[#f0fcfe] bg-white z-30`}
      >
        <div className="basis-1/2">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-6 md:w-8 lg:w-6 xl:w-8 2xl:w-10"
            />
          </Link>
        </div>
        <div className="md:hidden basis-1/2 flex justify-end">
          <div
            onClick={handleMenuOpen}
            className={`text-2xl md:text-4xl font-bold cursor-pointer text-gray-900 hover:text-gray-800 ${
              isMenuOpen ? "hidden" : "block"
            }`}
          >
            <HiMenuAlt3 />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="hidden md:flex items-center basis-1/2 gap-8 justify-end"
        >
          {menu.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`text-sm md:text-base lg:text-sm xl:text-lg 2xl:text-2xl font-normal transition-all ease-linear duration-150 cursor-pointer text-black hover:text-[#d70197]`}
            >
              {item.title}
            </Link>
          ))}
          <div>
            <Link
              to="#"
              className="text-sm text-white font-medium pt-1.5 pb-2 px-4 rounded-sm bg-[#011b3e] hover:bg-black hover:scale-95 transition-all duration-200 ease-linear"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Version */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden w-full h-screen overflow-hidden absolute z-50 transition-all duration-300 ease-linear`}
        >
          <div className="w-[60%] h-full bg-[#000000a3]">
            <div
              onClick={handleMenuClose}
              className={`${
                isMenuOpen ? "block" : "hidden"
              } pt-3 pl-3 pb-3 text-white text-xl md:text-3xl font-bold lg:hidden`}
            >
              <IoClose />
            </div>
            <div
              onClick={handleMenuClose}
              className="mt-14 flex flex-col gap-5 justify-center items-center"
            >
              {menu.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`text-sm font-normal transition-all ease-linear duration-150 cursor-pointer text-white`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
