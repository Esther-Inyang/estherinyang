import reactCert from "../assets/react-cert.jpg";
import copilotCert from "../assets/copilot-cert.png";
import uxCert from "../assets/ux-cert.jpeg";

const Training = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-[80%] mx-auto h-10 -mt-10 bg-white z-40 rounded-sm"></div>
      <div className="flex gap-5 justify-center items-center py-20">
        <div className="basis-[40%] flex flex-col justify-center items-center bg-white p-10">
          <div>
            <h1 className="text-2xl font-extrabold text-[#011b3e]">
              Trainings & Certifications
            </h1>
            <div className="w-full">
              <ul className="text-base font-light flex flex-col gap-3 py-7">
                <li>GitHub Copilot Certification Program (Microsoft)</li>
                <li>Google UX Design Professional Certificate</li>
                <li>Andela React Learning Program</li>
                <li>Google Africa Developer Scholarship</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="basis-[50%] bg-[#f6fdff] py-5 px-10">
          <div className="flex items-center gap-5">
            <div className="w-full h-40 p-2 relative">
              <img
                src={copilotCert}
                alt="certificate"
                className="w-full h-full"
              />
            </div>
            <div className="w-full h-40 p-2 relative">
              <img src={uxCert} alt="certificate" className="w-full h-full" />
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <div className="w-1/2 h-40 p-2 relative">
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
