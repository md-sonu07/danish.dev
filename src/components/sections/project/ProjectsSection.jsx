import { useState } from "react";
import ProjectHeadingSection from "./ProjectHeadingSection";
import ProjectFilterSection from "./ProjectFilterSection";
import ProjectGridSection from "./ProjectGridSection";
import { projectsData } from "../../../data/portfolioData";

const ProjectsSection = () => {
  const projects = projectsData;
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
