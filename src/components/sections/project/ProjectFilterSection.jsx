import { useMemo } from "react";

const ProjectFilterSection = ({ projects = [], selected = "All", onSelect }) => {
  const categories = useMemo(() => {
    const allTypes = projects.map((p) => p.projectType || "Web Project");
    const uniqueTypes = [...new Set(allTypes)];
    return ["All", ...uniqueTypes];
  }, [projects]);

  return (
    <div className="flex gap-3 mb-12 flex-wrap items-center">
      {categories.map((cat, idx) => {
        const isActive = selected === cat;

        return (
          <button
            key={idx}
            type="button"
            onClick={() => onSelect(cat)}
            className={`${
              isActive
                ? "text-white bg-primary border-primary"
                : "text-[#111418] dark:text-gray-300 bg-white dark:bg-[#1c2632] border-[#e5e7eb] dark:border-[#2d3a4b] hover:border-primary"
            } text-sm font-medium flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full border px-6 cursor-pointer transition-all duration-300`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilterSection;
