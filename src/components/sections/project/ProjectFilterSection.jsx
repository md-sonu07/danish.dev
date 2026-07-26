import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const ProjectFilterSection = () => {
  const { projects } = useSelector((state) => state.projects);
  const location = useLocation();

  const categories = useMemo(() => {
    const allTypes = projects.map(p => p.projectType || "Web Project");
    const uniqueTypes = [...new Set(allTypes)];
    return ["All", ...uniqueTypes];
  }, [projects]);

  const currentHash = location.hash || "#all";

  return (
    <div className="flex gap-3 mb-12 flex-wrap items-center">
      {categories.map((cat, idx) => {
        const hash = `#${cat.toLowerCase()}`;
        const isActive = currentHash === hash || (cat === "All" && currentHash === "#all");

        return (
          <NavLink
            key={idx}
            to={hash}
            className={`${isActive
              ? "text-white bg-primary border-primary"
              : "text-[#111418] dark:text-gray-300 bg-white dark:bg-[#1c2632] border-[#e5e7eb] dark:border-[#2d3a4b]"
              } text-sm font-medium flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full border px-6 cursor-pointer hover:border-primary transition-all duration-300`}
          >
            {cat}
          </NavLink>
        );
      })}
    </div>
  );
};

export default ProjectFilterSection;
