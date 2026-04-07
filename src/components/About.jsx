import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "../assets/about.jpg";
import { MdOutlineFileDownload } from "react-icons/md";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div className="xl:pb-20 overflow-hidden" id="about">
      <div className="w-[80%] mx-auto h-10 lg:-mt-5 bg-white z-30 rounded-sm"></div>
      <div className="mt-7 lg:mt-0 xl:mt-10 flex gap-2 flex-col justify-center items-center">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className="px-5 text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-extrabold text-[#011b3e]"
        >
          About me
        </h1>
        <div className="w-10 border-2 border-[#d701977b] rounded-full"></div>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row lg:gap-5 justify-center items-center">
        <div className="py-5 px-5 md:px-10 lg:px-3 md:w-full lg:w-0 lg:basis-[50%]">
          <div className="w-full h-60 md:h-100 lg:h-120 p-2 relative">
            <img src={aboutImg} alt="work station" className="w-full h-full" />
          </div>
        </div>

        <div className="md:w-[80%] mx-auto lg:basis-1/2 flex flex-col justify-center items-center pb-14 px-6 md:p-10 lg:pl-0 lg:pr-5">
          <div className="md:mt-7 lg:mt-0">
            <div className="text-3xl md:text-4xl lg:text-3xl font-bold text-[#011b3e] text-center lg:text-left">
              <h2 data-aos="fade-left" data-aos-delay="400">
                I am Professional
              </h2>
              <h2 data-aos="fade-right" data-aos-delay="400">
                Frontend Developer
              </h2>
            </div>
            <div className="w-full md:pb-16 lg:pb-0">
              <p
                data-aos="fade-left"
                data-aos-delay="300"
                className="w-[95%] lg:w-[97%] py-7 lg:pt-5 text-lg lg:text-base xl:text-lg font-light text-center lg:text-left"
              >
                A versatile frontend developer who brings more than just code to
                the table. With expertise in React, Next.js, and Tailwind CSS, a
                Google UX certification in accessibility and user-centered
                design, hands-on QA testing experience, and a
                Microsoft-certified proficiency in AI-assisted development with
                GitHub Copilot, I design, build, test, and refine digital
                products from end to end. My goal is always to create fast,
                accessible, and polished experiences that users love. Outside of
                work, I am deepening my understanding of Bitcoin and
                decentralized technology through dedicated self-study, including
                Mastering Bitcoin by Andreas Antonopoulos, with an interest in
                building at the intersection of open-source finance and great
                user experience.
              </p>
              <div className="mt-5 lg:mt-2 xl:mt-4 flex justify-center lg:justify-start gap-4 lg:gap-3">
                <a
                  href="#projects"
                  className="text-base lg:text-sm xl:text-lg text-white font-medium py-1.5 px-8 md:px-6 lg:px-10 rounded-sm bg-[#d70197] hover:bg-[#a80176] transition-all duration-200 ease-linear"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Projects
                </a>
                <a
                  href="/esther-inyang-cv.pdf"
                  download="/esther-inyang-cv.pdf"
                  className="flex gap-1 justify-center items-center text-[#d70197] font-medium py-1.5 px-4 rounded-sm border border-[#d70197] hover:bg-[#d701972d] transition-all duration-200 ease-linear"
                  data-aos="fade-up"
                  data-aos-delay="300"
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
