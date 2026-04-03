import aboutImg from "../assets/about.jpg";
import { MdOutlineFileDownload } from "react-icons/md";

const About = () => {
  return (
    <div className="xl:pb-20" id="about">
      <div className="w-[80%] mx-auto h-10 lg:-mt-5 bg-white z-30 rounded-sm"></div>

      <div className="mt-7 lg:mt-0 xl:mt-10 flex gap-2 flex-col justify-center items-center">
        <h1 className="px-5 text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-extrabold text-[#011b3e]">
          About me
        </h1>
        <div className="w-10 border-2 border-[#d701977b] rounded-full"></div>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row lg:gap-5 justify-center items-center">
        <div className="py-5 px-5 md:px-10 lg:px-3 md:w-full lg:w-0 lg:basis-[50%]">
          <div className="w-full h-60 md:h-100 p-2 relative">
            <img src={aboutImg} alt="work station" className="w-full h-full" />
          </div>
        </div>

        <div className="md:w-[80%] mx-auto lg:basis-1/2 flex flex-col justify-center items-center bg-white pb-14 px-6 md:p-10">
          <div className="md:mt-7 lg:mt-0">
            <div className="text-3xl md:text-4xl lg:text-3xl font-bold text-[#011b3e] text-center lg:text-left">
              <h2>I am Professional</h2>
              <h2>Frontend Developer</h2>
            </div>
            <div className="w-full md:pb-16 lg:pb-0">
              <p className="w-[95%] lg:w-[97%] py-7 text-lg lg:text-base xl:text-lg font-light text-center lg:text-left">
                I got into frontend because I love sitting right at the
                intersection of logic and design where the code you write
                directly shapes how someone feels when they use a product. Over
                the years I've worked across a range of industries, and that
                variety has made me a sharper, more adaptable developer. I work
                with React, Next.js, and Tailwind to turn ideas into clean,
                functional interfaces, from e-commerce stores to booking and
                investment platforms, and everything in between.
              </p>
              <div className="mt-5 lg:mt-2 xl:mt-4 flex justify-center lg:justify-start gap-4 lg:gap-3">
                <a
                  href="#projects"
                  className="text-base lg:text-sm xl:text-lg text-white font-medium py-1.5 px-8 md:px-6 lg:px-10 rounded-sm bg-[#d70197] hover:bg-[#a80176] transition-all duration-200 ease-linear"
                >
                  Projects
                </a>
                <a
                  href="/esther-inyang-cv.pdf"
                  download="/esther-inyang-cv.pdf"
                  className="flex gap-1 justify-center items-center text-[#d70197] font-medium py-1.5 px-4 rounded-sm border border-[#d70197] hover:bg-[#d701972d] transition-all duration-200 ease-linear"
                >
                  <MdOutlineFileDownload className="text-lg" />
                  <span className="text-base lg:text-sm xl:text-lg">
                    Download CV
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
