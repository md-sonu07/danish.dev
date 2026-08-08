import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProjectCard from "../../common/ProjectCard";
import { fetchProjects } from "../../../store/project/projectThunks";
import { clearError } from "../../../store/project/projectSlice";

const ProjectGridSection = ({ category = "All" }) => {
  const dispatch = useDispatch();
  const { projects, loading, error } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const filteredProjects = useMemo(() => {
    if (category === "All") return projects;

    return projects.filter((project) =>
      project.projectType?.toLowerCase().includes(category.toLowerCase())
    );
  }, [projects, category]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="animate-pulse bg-slate-100 dark:bg-slate-800 rounded-2xl h-[400px]"></div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 px-4">
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl p-8 max-w-md mx-auto">
          <p className="text-red-600 dark:text-red-400 font-medium mb-4">{error}</p>
          <button
            onClick={() => dispatch(fetchProjects())}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

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
