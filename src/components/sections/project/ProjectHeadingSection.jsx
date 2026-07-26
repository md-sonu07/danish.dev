import { Link } from "react-router-dom";
import Button from "../../common/Button";
import { HiOutlineFolder } from "react-icons/hi";
import { useSelector } from "react-redux";

const ProjectHeadingSection = () => {
  const { projects } = useSelector((state) => state.projects);
  const projectCount = projects?.length || 0;

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-[#111418] dark:text-white text-5xl font-black leading-tight tracking-tight">
          Selected Work
        </h1>
        <p className="text-[#617589] dark:text-gray-400 text-lg font-normal max-w-2xl">
          A curated collection of full-stack applications, technical
          experiments, and open-source contributions.
        </p>
      </div>
      <div className="flex items-center gap-2 text-primary font-semibold text-sm bg-primary/10 px-4 py-2 rounded-full border border-primary/20 cursor-default">
        <Button text={`${projectCount} Project${projectCount !== 1 ? 's' : ''}`} icon={HiOutlineFolder} />
      </div>
    </div>
  );
};

export default ProjectHeadingSection;
