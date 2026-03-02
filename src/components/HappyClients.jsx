import homvest from "../assets/homvest.png";
import iklasstutors from "../assets/iklasstutors.png";
import aquasolutions from "../assets/aquasolutions.png";
import proodoscare from "../assets/proodoscare.png";

const HappyClients = () => {
  const companies = [
    {
      img: aquasolutions,
    },
    {
      img: homvest,
    },
    {
      img: iklasstutors,
    },
    {
      img: proodoscare,
    },
  ];

  return (
    <div className="w-full py-10 px-10 text-black">
      <div className="mt-10 flex gap-2 flex-col justify-center items-center">
        <h1 className="px-5 text-3xl font-extrabold text-[#011b3e]">
          Happy Clients
        </h1>
        <div className="w-10 border-2 border-[#d701977b] rounded-full"></div>
      </div>
      <div className="mt-3 flex gap-10 flex-wrap items-center justify-center">
        {companies.map((company) => (
          <div key={company.img}>
            <img src={company.img} alt={company.img} className="w-36 " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
