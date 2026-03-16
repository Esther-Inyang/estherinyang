import Navbar from "./Navbar";
import profileImg from "../assets/profile.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RxGithubLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-24 bg-linear-to-r from-[#f3f6f9] via-[#e8e4f7] to-[#fae8ea] z-30">
      <Navbar />

      <div className="mt-16 lg:mt-20 px-5 md:px-20 lg:px-0 md:mt-20 flex flex-col gap-10 md:gap-0 lg:flex-row justify-center">
        <div className="lg:basis-[65%] xl:basis-[55%] lg:pr-10">
          <div className="bg-white px-5 pt-10 pb-2 md:pl-10 md:py-10 rounded-md">
            <div className="text-4xl font-extrabold text-[#011b3e]">
              <h1>Hi, I'm</h1>
              <h1>Esther Inyang</h1>
            </div>
            <div>
              <p className="w-[95%] lg:w-[80%] py-10 text-lg lg:text-base xl:text-lg font-light">
                A frontend developer with expertise in React, Next.js, and
                Tailwind CSS. I build responsive and user-friendly web
                applications with clean, maintainable code. My passion lies in
                creating seamless digital experiences that are both functional
                and visually appealing.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[80%] lg:basis-[35%] lg:mt-20 lg:-ml-32 lg:w-100 h-90 md:h-112 lg:h-100 xl:h-105 px-5 py-5 rounded-t-sm rounded-bl-xl bg-white flex gap-4 items-center shadow-xl shadow-[#f0fcfe]">
          <div className="h-full md:basis-[70%] lg:basis-[85%] xl:basis-[75%] p-2 bg-white relative shadow-sm shadow-[#f0fcfe] rounded-sm">
            <div className="h-full">
              <img
                src={profileImg}
                alt="Profile picture"
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="w-fit mt-3">
              <h2 className="px-3 py-1 border-2 border-[#33333332] text-xl font-extrabold text-[#011b3e] rounded-md shadow-sm">
                Frontend Developer
              </h2>
              {/* <div className="w-14 mt-1 border border-[#d701977b]"></div> */}
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <a
              href="https://linkedin.com/in/estherinyang"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-transparent text-[#011b3e] rounded-full hover:border-[#d70197] hover:text-[#d70197] transition-all duration-200 ease-linear"
            >
              <FaLinkedinIn className="text-lg xl:text-xl" />
            </a>
            <a
              href="https://github.com/esther-inyang"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-transparent text-[#011b3e] rounded-full hover:border-[#d70197] hover:text-[#d70197] transition-all duration-200 ease-linear"
            >
              <RxGithubLogo className="text-lg xl:text-xl" />
            </a>
            <a
              href="https://x.com/realdevesti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-transparent text-[#011b3e] rounded-full hover:border-[#d70197] hover:text-[#d70197] transition-all duration-200 ease-linear"
            >
              <FaXTwitter className="text-lg xl:text-xl" />
            </a>
            <a
              href="mailto:estherinyang07@gmail.com"
              className="p-2 border border-transparent text-[#011b3e] rounded-full hover:border-[#d70197] hover:text-[#d70197] transition-all duration-200 ease-linear"
            >
              <HiOutlineMail className="text-lg xl:text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
