import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RxGithubLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#011b3e] ">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="basis-1/2">
          <div className="w-[50%] mx-auto">
            <div className="flex gap-10  mt-3">
              <div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://linkedin.com/in/estherinyang"
                    target="_blank"
                    className="p-2 border border-transparent text-[#ffffff] rounded-full hover:border-[#d70197] hover:text-[#d70197] transition-all duration-200 ease-linear"
                  >
                    <FaLinkedinIn className="text-lg" />
                  </a>
                  <p className="text-sm text-white mt-1">LinkedIn</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/esther-inyang"
                    target="_blank"
                    className="p-2 border border-transparent text-[#ffffff] rounded-full hover:border-[#d70197] hover:text-[#d70197] transition-all duration-200 ease-linear"
                  >
                    <RxGithubLogo className="text-lg" />
                  </a>
                  <p className="text-sm text-white mt-1">GitHub</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://x.com/realdevesti"
                    target="_blank"
                    className="p-2 border border-transparent text-[#ffffff] rounded-full hover:border-[#d70197] hover:text-[#d70197] transition-all duration-200 ease-linear"
                  >
                    <FaXTwitter className="text-lg" />
                  </a>
                  <p className="text-sm text-white mt-1">Twitter </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    target="_blank"
                    className="p-2 border border-transparent text-[#ffffff] rounded-full hover:border-[#d70197] hover:text-[#d70197] transition-all duration-200 ease-linear"
                  >
                    <HiOutlineMail className="text-base" />
                  </a>
                  <p className="text-sm text-white mt-1">Email</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pl-2 flex flex-col gap-3">
              <p className="text-white text-sm flex flex-col gap-1">
                <span className="font-medium underline">Location:</span>
                <span className="font-normal">Lagos, Nigeria</span>
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 py-5 px-10 flex-col items-center justify-center rounded-md">
          <div className="flex gap-1 flex-col items-center">
            <h1 className="text-xl font-extrabold text-white">Contact me</h1>
            <div className="w-10 border-2 border-[#720150] rounded-full"></div>
          </div>
          <div className="mt-5 w-full flex gap-5 justify-center">
            <form className="w-full flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="py-1.5 px-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 bg-[#012656] text-sm text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="py-1.5 px-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 bg-[#012656] text-sm text-white"
              />
              <textarea
                placeholder="Your Message"
                className="py-1.5 px-2 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 bg-[#012656] resize-none text-sm text-white"
                rows="3"
              />
              <div className="flex justify-center">
                <div className="w-fit">
                  <button
                    type="submit"
                    className="bg-[#720150] text-sm text-white font-normal py-1.5 px-6 rounded-md hover:bg-[#d70197] transition-all duration-200 ease-linear"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="py-2 text-xs text-center text-white bg-[#001630]">
        &copy; {new Date().getFullYear()} Esther Inyang. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
