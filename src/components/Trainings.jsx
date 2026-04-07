import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import reactCert from "../assets/react-cert.jpg";
import copilotCert from "../assets/copilotcert.jpg";
import uxCert from "../assets/ux-cert.jpeg";

const Training = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
    });
  }, []);
  return (
    <div className="bg-gray-100 overflow-hidden">
      <div className="w-[80%] mx-auto h-10 -mt-10 bg-white z-40 rounded-sm"></div>
      <div className="lg:flex gap-5 justify-center items-center py-20">
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="basis-[40%] bg-white pt-8 pb-2 px-7 md:p-10"
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-3xl lg:text-2xl font-extrabold text-[#011b3e]"
          >
            Trainings & Certifications
          </h1>
          <div className="w-full pl-5">
            <ul className="md:text-lg lg:text-base font-light flex flex-col gap-3 py-7 list-disc">
              <li>GitHub Copilot Certification Program (Microsoft)</li>
              <li>Google UX Design Professional Certificate</li>
              <li>Andela React Learning Program (META)</li>
              <li>Google Africa Developer Scholarship</li>
            </ul>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="lg:basis-[50%] bg-[#f6fdff] py-5 md:px-10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <div className="w-[85%] md:w-[80%] mx-auto lg:w-full h-64 lg:h-40 p-2 relative">
              <img
                src={copilotCert}
                alt="certificate"
                className="w-full h-full"
              />
            </div>
            <div className="w-[85%] md:w-[80%] mx-auto lg:w-full h-64 lg:h-40 p-2 relative">
              <img src={uxCert} alt="certificate" className="w-full h-full" />
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <div className="w-[85%] md:w-[80%] mx-auto h-64 lg:w-1/2 lg:h-40 p-2 relative">
              <img
                src={reactCert}
                alt="certificate"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
