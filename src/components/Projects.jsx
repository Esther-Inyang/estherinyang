import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { projectsData } from "../data";

const Projects = () => {
  return (
    <div className="pt-10 pb-24 bg-white z-30">
      <div className="mt-10 flex gap-2 flex-col justify-center items-center">
        <h1 className="px-5 text-3xl font-extrabold text-[#011b3e]">
          Projects
        </h1>
        <div className="w-10 border-2 border-[#d701977b] rounded-full"></div>
      </div>
      <div className="w-[70%] mx-auto mt-10 text-center">
        <p className="lg:w-[60%] mx-auto mt-5 text-sm font-light text-[#011b3e]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
          veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sint, vel!
        </p>
      </div>
      <div className="px-5">
        <div className="w-full flex lg:flex-col gap-5 flex-wrap justify-center mt-4">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="w-full lg:basis-[30%] p-2 bg-white rounded-sm border border-gray-300"
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
                <div className="mt-4 flex justify-between">
                  <Link
                    to={project.websiteLink}
                    className="group basis-[48%] flex gap-1 justify-center items-center text-white font-medium py-1.5 px-3 rounded-sm bg-[#011b3e] hover:bg-[#011b3ee1] transition-all duration-200 ease-linear"
                  >
                    <span className="text-xs">Visit website</span>
                    <FaArrowRight className="text-[10px] mt-0.5 transition-transform duration-200 ease-linear group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to={project.githubLink}
                    className="basis-[48%] flex gap-1 justify-center items-center text-[#011b3e] font-medium py-1.5 px-3 rounded-sm border border-[#011b3e] hover:bg-[#011b3e22] transition-all duration-200 ease-linear"
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
    </div>
  );
};

export default Projects;
