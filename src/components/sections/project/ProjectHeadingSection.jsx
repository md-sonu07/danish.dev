import { HiOutlineFolder } from "react-icons/hi";
import SectionHeading from "../../common/SectionHeading";
import { projectsData } from "../../../data/portfolioData";

const ProjectHeadingSection = () => {
  const projects = projectsData;
  const projectCount = projects?.length || 0;

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <SectionHeading
        kicker="Portfolio"
        title="Selected Work"
        description="A curated collection of full-stack applications, technical experiments, and open-source contributions."
      />
      <div className="flex items-center gap-2 text-primary font-semibold text-sm bg-primary/10 px-4 py-2 rounded-full border border-primary/20 w-fit">
        <HiOutlineFolder className="text-base" />
        <span>{projectCount} Project{projectCount !== 1 ? 's' : ''}</span>
      </div>
    </div>
  );
};

export default ProjectHeadingSection;
