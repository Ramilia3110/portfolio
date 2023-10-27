import About from "@/app/components/About";
import Cover from "@/app/components/Cover";
import MatrixBg from "@/app/components/MatrixBg";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";

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
