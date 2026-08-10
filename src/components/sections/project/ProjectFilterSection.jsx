import { useMemo } from "react";
import { HiOutlineSquares2X2, HiOutlineCodeBracket, HiOutlineWindow, HiOutlineShoppingBag, HiOutlineFolder } from "react-icons/hi2";

const ProjectFilterSection = ({ projects = [], selected = "All", onSelect }) => {
  const getIcon = (cat) => {
    const text = cat.toLowerCase();
    if (text === 'all') return <HiOutlineSquares2X2 className="text-lg" />;
    if (text.includes('full-stack')) return <HiOutlineCodeBracket className="text-lg" />;
    if (text.includes('web')) return <HiOutlineWindow className="text-lg" />;
    if (text.includes('commerce') || text.includes('shop')) return <HiOutlineShoppingBag className="text-lg" />;
    return <HiOutlineFolder className="text-lg" />;
  };
  const categories = useMemo(() => {
    const allTypes = projects.map((p) => p.projectType || "Web Project");
    const uniqueTypes = [...new Set(allTypes)];
    return ["All", ...uniqueTypes];
  }, [projects]);

  return (
    <div className="mb-12 w-full overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="inline-flex p-1.5 bg-gray-100/80 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl gap-1.5 border border-white/50 dark:border-white/5 shadow-inner">
        {categories.map((cat, idx) => {
          const isActive = selected === cat;

          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelect(cat)}
              className={`
                relative flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap
                ${isActive 
                  ? "bg-white dark:bg-slate-700 text-primary shadow-sm shadow-black/5 dark:shadow-black/20 ring-1 ring-black/5 dark:ring-white/10" 
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50"
                }
              `}
            >
              <span className={`${isActive ? "text-primary" : "text-gray-400 dark:text-gray-500"} transition-colors duration-300`}>
                {getIcon(cat)}
              </span>
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectFilterSection;
