import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Training from "./Trainings";
import Blog from "./Blog";
import Idea from "./Idea";
// import Contact from "./Contact";
import Quotes from "./Quotes";
import HappyClients from "./HappyClients";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Training />
      <Blog />
      <Idea />
      <Quotes />
      <HappyClients />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;
