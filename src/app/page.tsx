import About from "@/components/About";
import Cover from "@/components/Cover";
import MatrixBg from "@/components/MatrixBg";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden">
      <MatrixBg />
      <div className="flex flex-col">
        <Cover />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </div>
    </main>
  );
}
