import { useState } from "react";
import { useSelector } from "react-redux";
import ProjectHeadingSection from "./ProjectHeadingSection";
import ProjectFilterSection from "./ProjectFilterSection";
import ProjectGridSection from "./ProjectGridSection";

const ProjectsSection = () => {
  const { projects } = useSelector((state) => state.projects);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="py-16 md:py-24">
      <ProjectHeadingSection />
      <ProjectFilterSection
        projects={projects}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ProjectGridSection category={selectedCategory} />
    </section>
  );
};

export default ProjectsSection;
