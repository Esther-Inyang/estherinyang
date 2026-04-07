import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { blogData } from "../data";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
    });
  }, []);
  return (
    <div className="px-2 md:px-0 mt-14 lg:mt-20 pb-16 md:pb-24 bg-white z-30 overflow-hidden">
      <div className="mt-10 flex gap-2 flex-col justify-center items-center">
        <h1
          id="blog"
          data-aos="fade-up"
          data-aos-delay="300"
          className="px-5 text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-extrabold text-[#011b3e]"
        >
          Blog
        </h1>
        <div className="w-10 border-2 border-[#d701977b] rounded-full"></div>
      </div>
      <div className="md:w-[70%] mx-auto mt-10 text-center">
        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className="w-[90%] md:w-[70%] xl:w-[80%] mx-auto mt-5 text-sm md:text-base xl:text-xl font-light text-[#011b3e]"
        >
          I write about life, lessons, and the random things on my mind,
          including the occasional piece for anyone figuring out where to start.
        </p>
      </div>
      <div className="mt-5 lg:mt-10 px-5 lg:px-0 lg:w-[90%] mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {blogData.map((project) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={project.id * 100}
              className="w-full p-4 lg:p-2 xl:p-3 bg-white rounded-sm border border-gray-300"
            >
              <div className="rounded-sm flex flex-col h-full">
                <div className="w-full h-48 xl:h-54 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="mt-3">
                  <h2 className="text-xl font-extrabold text-[#011b3e] leading-tight">
                    {project.title}
                  </h2>
                  <p className="mt-3 mb-2 text-xs xl:text-sm font-light text-[#011b3e]">
                    {project.description}
                  </p>
                </div>
                <div className="w-fit mt-auto mb-1">
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium py-1.5 lg:py-2 rounded-sm text-pink-500 transition-colors duration-300 ease-linear hover:text-blue-400"
                  >
                    <span className="text-[13px] xl:text-sm">Read post..</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
