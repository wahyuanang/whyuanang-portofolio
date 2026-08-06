import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import EducationExperience from "@/components/EducationExperience";
import ClientSection from "@/components/ClientSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <EducationExperience />
      <ClientSection />
    </div>
  );
}
