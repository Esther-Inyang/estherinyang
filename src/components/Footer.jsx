import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RxGithubLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#011b3e] pt-10">
      <div className="p-10 flex gap-5 flex-col items-center justify-center">
        <div className="flex gap-5 justify-center">
          <a
            href="https://linkedin.com/in/estherinyang"
            target="_blank"
            className="p-2 border border-transparent text-[#ffffff] rounded-full hover:border-[#ca2fe5] hover:text-[#ca2fe5] transition-all duration-200 ease-linear"
          >
            <FaLinkedinIn className="text-lg" />
          </a>
          <a
            href="https://github.com/esther-inyang"
            target="_blank"
            className="p-2 border border-transparent text-[#ffffff] rounded-full hover:border-[#ca2fe5] hover:text-[#ca2fe5] transition-all duration-200 ease-linear"
          >
            <RxGithubLogo className="text-lg" />
          </a>
          <a
            href="https://x.com/realdevesti"
            target="_blank"
            className="p-2 border border-transparent text-[#ffffff] rounded-full hover:border-[#ca2fe5] hover:text-[#ca2fe5] transition-all duration-200 ease-linear"
          >
            <FaXTwitter className="text-lg" />
          </a>
          <a
            href="#"
            target="_blank"
            className="p-2 border border-transparent text-[#ffffff] rounded-full hover:border-[#ca2fe5] hover:text-[#ca2fe5] transition-all duration-200 ease-linear"
          >
            <HiOutlineMail className="text-base" />
          </a>
        </div>
      </div>
      <div className="py-2 text-xs text-center text-gray-300 bg-[#001630]">
        &copy; {new Date().getFullYear()} Esther Inyang. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
