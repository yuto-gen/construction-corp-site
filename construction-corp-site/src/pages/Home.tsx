import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import CTA from "@/components/home/CTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Projects />
      <CTA />
    </div>
  );
};

export default Home;
