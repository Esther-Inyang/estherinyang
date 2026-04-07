import { useEffect } from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImg from "../assets/profile.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RxGithubLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div className="pb-24 bg-linear-to-r from-[#f3f6f9] via-[#e8e4f7] to-[#fae8ea] z-30 overflow-hidden">
      <div>
        <Navbar />
      </div>

      <div className="mt-16 lg:mt-20 px-5 md:px-20 lg:px-0 md:mt-20 flex flex-col gap-10 md:gap-0 lg:flex-row justify-center lg:mb-10">
        <div className="lg:basis-[65%] xl:basis-[50%] lg:pr-10">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="bg-white px-5 pt-10 pb-2 md:pl-10 md:py-10 rounded-md"
          >
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="text-4xl font-extrabold text-[#011b3e]"
            >
              <h1>Hi, I'm</h1>
              <h1>Esther Inyang</h1>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <p className="w-[95%] lg:w-full py-10 lg:py-0 lg:mt-8 text-lg lg:text-base pr-5 xl:text-lg font-light text-justify">
                I got into frontend because I love sitting right at the
                intersection of logic and design, where every decision directly
                shapes how someone feels when they use a product. Over the years
                I've worked across a range of industries, and that variety has
                made me a sharper, more adaptable developer. My background in
                software testing also means I don't just build features, I think
                about quality at every stage, because at the end of the day,
                great products deserve to be designed thoughtfully, tested
                rigorously, and built efficiently.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="md:w-[80%] lg:basis-[37%] lg:mt-20 lg:-ml-12 lg:w-100 h-90 md:h-112 lg:h-100 xl:h-105 px-5 py-5 rounded-t-sm rounded-bl-xl bg-white flex gap-4 items-center shadow-xl shadow-[#f0fcfe]"
        >
          <div className="h-full md:basis-[70%] lg:basis-[85%] xl:basis-[75%] p-2 bg-white relative shadow-sm shadow-[#f0fcfe] rounded-sm">
            <div className="h-full">
              <img
                src={profileImg}
                alt="Profile picture"
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="w-fit mt-3">
              <h2 className="flex flex-col px-5 py-2 border-2 border-[#33333332] rounded-md shadow-sm">
                <span className="text-xl text-[#011b3e] font-extrabold ">
                  Frontend Developer
                </span>
                <span className="text-sm text-[#464849] font-medium">
                  (Software tester)
                </span>
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
