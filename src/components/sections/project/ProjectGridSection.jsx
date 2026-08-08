import { useMemo } from "react";
import ProjectCard from "../../common/ProjectCard";
import { projectsData } from "../../../data/portfolioData";

const ProjectGridSection = ({ category = "All" }) => {
  const projects = projectsData;

  const filteredProjects = useMemo(() => {
    if (category === "All") return projects;

    return projects.filter((project) =>
      project.projectType?.toLowerCase().includes(category.toLowerCase())
    );
  }, [projects, category]);

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-20 px-4">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">No Projects Found</h3>
        <p className="text-slate-600 dark:text-slate-400">We couldn't find any projects at the moment. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <ProjectCard key={project.id || index} {...project} index={index} />
      ))}
    </div>
  );
};

export default ProjectGridSection;
