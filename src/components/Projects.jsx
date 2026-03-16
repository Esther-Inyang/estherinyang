import { FaArrowRight } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { projectsData } from "../data";

const Projects = () => {
  return (
    <div className="p-2 md:px-0 mt-14 md:mt-16 py-10 md:pb-16 lg:pb-20 bg-white z-30">
      <div className="flex gap-2 flex-col justify-center items-center">
        <h1
          id="projects"
          className="px-5 text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-extrabold text-[#011b3e]"
        >
          Projects
        </h1>
        <div className="w-10 border-2 border-[#d701977b] rounded-full"></div>
      </div>
      <div className="w-[80%] md:w-[70%] mx-auto mt-10 mb-5 md:mb-10 text-center">
        <p className="lg:w-[95%] xl:w-[80%] mx-auto mt-5 text-sm md:text-base xl:text-xl font-light text-[#011b3e]">
          These are some of the projects I've poured time and thought into. Each
          one came with its own challenges, and honestly, that's what I enjoy
          most. I like figuring things out as I build. From e-commerce platforms
          to investment systems, here's a look at what I've been creating.
        </p>
      </div>
      <div className="px-5 lg:px-0 lg:w-[90%] mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="w-full p-4 lg:p-2 xl:p-3 bg-white rounded-sm border border-gray-300"
            >
              <div className="rounded-sm flex flex-col h-full">
                <div className="w-full h-40 lg:h-48 xl:h-54 relative">
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
                  <p className="mt-1 xl:mt-2 text-xs xl:text-sm font-light text-[#011b3e]">
                    {project.description}
                  </p>
                  <div className="flex gap-1 flex-wrap text-gray-600 mt-5 mb-4">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="py-1 px-2 xl:px-3 text-xs xl:text-sm font-medium border border-gray-200 rounded-md"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex justify-between">
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group basis-[48%] flex gap-1 justify-center items-center text-white font-medium py-2 lg:py-1.5 px-3 rounded-sm bg-[#011b3e] hover:bg-[#011b3ee1] transition-all duration-200 ease-linear"
                  >
                    <span className="text-xs xl:text-sm">Visit website</span>
                    <FaArrowRight className="text-[10px] mt-0.5 transition-transform duration-200 ease-linear group-hover:translate-x-1" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="basis-[48%] flex gap-1 justify-center items-center text-[#011b3e] font-medium py-2 lg:py-1.5 px-3 rounded-sm border border-[#011b3e] hover:bg-[#011b3e22] transition-all duration-200 ease-linear"
                  >
                    <RxGithubLogo className="text-xs xl:text-sm" />
                    <span className="text-xs xl:text-sm">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="w-full flex justify-center mt-10 md:mt-14">
        <Link
          to="/all-projects"
          className="text-sm xl:text-lg text-white font-medium py-2 lg:py-1.5 px-6 lg:px-4 xl:px-6 rounded-sm bg-[#d70197] hover:bg-[#a80176] transition-all duration-200 ease-linear"
        >
          View Projects Collection
        </Link>
      </div> */}
    </div>
  );
};

export default Projects;
