import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RxGithubLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#011b3e] lg:mt-10 xl:mt-16">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:basis-1/2 order-2 lg:order-1">
          <div className="lg:w-[50%] mx-auto">
            <div className="flex gap-10 mt-8 lg:mt-3">
              <div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://linkedin.com/in/estherinyang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-transparent text-[#ffffff] rounded-full hover:border-[#d70197] hover:text-[#d70197] transition-all duration-200 ease-linear"
                  >
                    <FaLinkedinIn className="text-lg" />
                  </a>
                  <a
                    href="https://linkedin.com/in/estherinyang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm xl:text-base text-white mt-1"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/esther-inyang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-transparent text-[#ffffff] rounded-full hover:border-[#d70197] hover:text-[#d70197] transition-all duration-200 ease-linear"
                  >
                    <RxGithubLogo className="text-lg" />
                  </a>
                  <a
                    href="https://github.com/esther-inyang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm xl:text-base text-white mt-1"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://x.com/realdevesti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-transparent text-[#ffffff] rounded-full hover:border-[#d70197] hover:text-[#d70197] transition-all duration-200 ease-linear"
                  >
                    <FaXTwitter className="text-lg" />
                  </a>
                  <a
                    href="https://x.com/realdevesti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm xl:text-base text-white mt-1"
                  >
                    Twitter
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:estherinyang07@gmail.com"
                    className="p-2 border border-transparent text-[#ffffff] rounded-full hover:border-[#d70197] hover:text-[#d70197] transition-all duration-200 ease-linear"
                  >
                    <HiOutlineMail className="text-base" />
                  </a>
                  <a
                    href="mailto:estherinyang07@gmail.com"
                    className="text-sm xl:text-base text-white mt-1"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-5 mb-8 lg:mt-8 lg:mb-0 pl-2 flex flex-col gap-3 justify-center items-center lg:justify-start lg:items-start">
              <p className="text-white text-sm xl:text-base flex flex-col gap-1">
                <span className="font-medium underline text-center lg:text-left">
                  Location:
                </span>
                <span className="font-normal">Lagos, Nigeria</span>
              </p>
              <p className="text-white text-sm xl:text-base flex flex-col gap-1">
                <span className="font-medium underline text-center lg:text-left">
                  Contact:
                </span>
                <span className="font-normal">estherinyang07@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <div
          id="contact"
          className="w-full lg:basis-1/2 order-1 lg:order-2 mt-5 lg:mt-0 py-5 px-10 flex-col items-center justify-center rounded-md"
        >
          <div className="flex gap-1 flex-col items-center">
            <h1 className="text-xl xl:text-2xl font-extrabold text-white">
              Contact me
            </h1>
            <div className="w-10 border-2 border-[#720150] rounded-full"></div>
          </div>
          <div className="mt-5 w-full flex gap-5 justify-center">
            <form className="w-full flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="py-1.5 px-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 bg-[#012656] text-sm xl:text-base text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="py-1.5 px-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 bg-[#012656] text-sm xl:text-base text-white"
              />
              <textarea
                placeholder="Your Message"
                className="py-1.5 px-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 bg-[#012656] resize-none text-sm text-white"
                rows="4"
              />
              <div className="mt-2 flex justify-center">
                <div className="w-fit">
                  <button
                    type="submit"
                    className="bg-[#720150] text-sm text-white font-normal py-2 lg:py-1.5 px-6 rounded-md hover:bg-[#d70197] transition-all duration-200 ease-linear"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="py-2 text-[10px] md:text-xs xl:text-sm xl:py-3 text-center text-white bg-[#001630]">
        &copy; {new Date().getFullYear()} Esther Inyang. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
