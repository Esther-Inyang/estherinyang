import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { allProjectsData } from "../data";
import { FaAngleLeft } from "react-icons/fa6";

const AllProjectsCollection = () => {
  const navigate = useNavigate();
  return (
    <div className="p-2 md:px-0 mt-14 md:mt-16 pt-10 pb-8 md:pb-16 lg:pb-20 bg-white z-30">
      <div className="pl-5">
        <button
          onClick={() => navigate(-1)}
          className="w-fit group flex items-center justify-between py-2.5 px-4 text-xs border border-[#DBDBDB] text-[#020122] font-medium rounded-4xl hover:bg-gray-50 transition-all duration-200 ease-linear hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
        >
          <FaAngleLeft className="mr-1" />
          <span>Back</span>
        </button>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <h1 className="px-5 text-2xl md:text-4xl lg:text-3xl font-extrabold text-[#011b3e]">
          Projects Collection
        </h1>
      </div>
      <div className="w-[85%] md:w-[70%] mx-auto mt-10 text-center">
        <p className="lg:w-[60%] mx-auto mt-5 text-sm md:text-base font-light text-[#011b3e]">
          Starting from basic beginner Projects to advanced collaborations
          during the course of my learning and practice ipsum dolor sit amet
          consectetur, adipisicing elit. Vitae, veritatis? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Sint, vel!
        </p>
      </div>
      <div className="px-5">
        <div className="w-full flex flex-col gap-8 md:gap-5 md:flex-row flex-wrap justify-center mt-4">
          {allProjectsData.map((project) => (
            <div
              key={project.id}
              className="w-full md:basis-[43%] lg:basis-[30%] h-105 lg:h-98 p-4 lg:p-2 bg-white rounded-sm border border-gray-300"
            >
              <div className="rounded-sm">
                <div className="w-full h-48 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-xl font-extrabold text-[#011b3e]">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-xs font-light text-[#011b3e]">
                    {project.description}
                  </p>
                  <div className="flex gap-1 flex-wrap text-xs font-medium text-gray-600 mt-5">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="py-1 px-2 text-xs border border-gray-200 rounded-md"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 lg:mt-4 flex justify-between">
                  <Link
                    to={project.websiteLink}
                    className="group basis-[48%] flex gap-1 justify-center items-center text-white font-medium py-2 lg:py-1.5 px-3 rounded-sm bg-[#011b3e] hover:bg-[#011b3ee1] transition-all duration-200 ease-linear"
                  >
                    <span className="text-xs">Visit website</span>
                    <FaArrowRight className="text-[10px] mt-0.5 transition-transform duration-200 ease-linear group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to={project.githubLink}
                    className="basis-[48%] flex gap-1 justify-center items-center text-[#011b3e] font-medium py-2 lg:py-1.5 px-3 rounded-sm border border-[#011b3e] hover:bg-[#011b3e22] transition-all duration-200 ease-linear"
                  >
                    <RxGithubLogo className="text-xs" />
                    <span className="text-xs">See codes</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center mt-10 md:mt-14">
        <Link
          to="/all-projects"
          className="text-sm text-white font-medium py-2 lg:py-1.5 px-6 lg:px-4 rounded-sm bg-[#d70197] hover:bg-[#a80176] transition-all duration-200 ease-linear"
        >
          View Projects Collection
        </Link>
      </div>
    </div>
  );
};

export default AllProjectsCollection;
