import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Research from "../components/Research";
import Skills from "../components/Skills";
import Leadership from "../components/Leadership";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Research />
      <Skills />
      <Leadership />
      <Certifications />
      <Contact />
    </>
  );
}

export default Home;
