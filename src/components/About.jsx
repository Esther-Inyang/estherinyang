import { Link } from "react-router-dom";
import aboutImg from "../assets/about.jpg";
import { MdOutlineFileDownload } from "react-icons/md";

const About = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto h-10 lg:-mt-5 bg-white z-30 rounded-sm"></div>

      <div className="flex gap-2 flex-col justify-center items-center">
        <h1 className="px-5 text-3xl font-extrabold text-[#011b3e]">
          About me
        </h1>
        <div className="w-10 border-2 border-[#d701977b] rounded-full"></div>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row lg:gap-10 justify-center items-center">
        <div className="basis-[50%] py-5 px-5 lg:px-10">
          <div className="w-full h-80 lg:h-100 p-2 relative">
            <img src={aboutImg} alt="work station" className="w-full h-full" />
          </div>
        </div>

        <div className="basis-1/2 flex flex-col justify-center items-center bg-white px-6 lg:p-10">
          <div>
            <div className="text-3xl font-bold text-[#011b3e]">
              <h2>I am Professional</h2>
              <h2>Frontend Developer</h2>
            </div>
            <div className="w-full">
              <p className="w-[90%] py-7 text-base font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                dicta impedit repellat nulla labore, alias voluptates expedita
                vero quo debitis possimus molestiae totam consequatur! Sapiente
                velit nisi iusto quae dolor?
              </p>
              <div className="mt-5 flex gap-3">
                <Link
                  to="#"
                  className="text-sm text-white font-medium py-1.5 px-4 rounded-sm bg-[#d70197] hover:bg-[#a80176] transition-all duration-200 ease-linear"
                >
                  My Projects
                </Link>
                <Link
                  to="#"
                  className="flex gap-1 justify-center items-center text-[#d70197] font-medium py-1.5 px-4 rounded-sm border border-[#d70197] hover:bg-[#d701972d] transition-all duration-200 ease-linear"
                >
                  <MdOutlineFileDownload className="text-lg" />
                  <span className="text-sm">Download CV</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
