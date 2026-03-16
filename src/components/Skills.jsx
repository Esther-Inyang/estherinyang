import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import vite from "../assets/vite.png";
import redux from "../assets/redux.png";
import next from "../assets/next.png";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      img: html,
    },
    {
      name: "CSS3",
      img: css,
    },
    {
      name: "JavaScript",
      img: js,
    },
    {
      name: "React",
      img: react,
    },
    {
      name: "Tailwind CSS",
      img: tailwind,
    },
    {
      name: "Vite",
      img: vite,
    },
    {
      name: "Redux Toolkit",
      img: redux,
    },
    {
      name: "Next.js",
      img: next,
    },
  ];

  return (
    <div className="relative w-full pt-12 pb-5 lg:pb-14 px-10 text-black bg-[#d701970e]">
      <div className="md:mt-10 flex gap-2 flex-col justify-center items-center">
        <h1 className="px-5 text-3xl lg:text-3xl xl:text-4xl font-extrabold text-[#011b3e]">
          Skills
        </h1>
        <div className="w-10 border-2 border-[#d701977b] rounded-full"></div>
      </div>
      <div className="flex gap-5 xl:gap-10 flex-wrap justify-center mt-10 xl:mt-16">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 xl:gap-3"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
            />
            <p className="text-sm xl:text-base font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="absolute -bottom-10 left-1/2 w-[80%] -translate-x-1/2 h-10 bg-[#d701970e] z-30 rounded-sm"></div>
    </div>
  );
};

export default Skills;
