import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Idea = () => {
  return (
    <div>
      <div className="relative bg-[#011b3e] px-10 pt-14 pb-20 flex gap-10 flex-col items-center justify-center">
        <h1 className="w-[40%] mx-auto text-xl font-extrabold text-white text-center">
          Do You have a Project Idea? Let's collaborate and bring it to life!
        </h1>
        <p className="w-[70%] text-base text-center font-light text-gray-200">
          Beyond just a portfolio. I connect with like-minded individuals, and
          contribute to the tech community. Whether you're a fellow developer, a
          potential collaborator, or simply someone interested in my work, Let's
          turn ideas into reality together!
        </p>
        <Link
          to="#"
          className="flex gap-1 items-center text-sm text-white font-medium py-2 px-6 rounded-sm bg-[#d70197] hover:bg-[#a80176] transition-all duration-200 ease-linear"
        >
          <span>Let's work together</span>
          <FaArrowRight className="text-sm" />
        </Link>
        <div className="absolute w-[80%] -bottom-8 h-10 bg-[#011b3e] z-30 rounded-b-lg shadow-2xl"></div>
      </div>
    </div>
  );
};

export default Idea;
