// import Image from 'next/image'

import About from "@/components/About";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <div className="overflow-hidden bg-primary-black text-dark-text">
      <About />
      <Intro />
      <Skills />
      <Projects />
      <Blog />
      <Footer />
    </div>
  );
}
