const ProjectTable = ({ projects, onEdit, onDelete }) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl">

      {/* ================= DESKTOP / TABLET TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-slate-600 dark:text-slate-300">
                Project
              </th>
              <th className="px-6 py-4 text-left font-semibold text-slate-600 dark:text-slate-300">
                Type
              </th>
              <th className="px-6 py-4 text-left font-semibold text-slate-600 dark:text-slate-300">
                Tech Stack
              </th>
              <th className="px-6 py-4 text-left font-semibold text-slate-600 dark:text-slate-300">
                Links
              </th>
              <th className="px-6 py-4 text-right font-semibold text-slate-600 dark:text-slate-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {projects.map((project) => (
              <tr
                key={project.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={project.projectImage}
                      alt={project.title}
                      className="h-12 w-12 rounded-xl border border-slate-200 dark:border-slate-800 object-cover"
                      onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/48?text=No+Img")
                      }
                    />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {project.title}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 max-w-xs truncate">
                        {project.description}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {project.languages.map((lang, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Preview
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </td>

                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-4">
                    <button
                      onClick={() => onEdit(project)}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(project.id)}
                      className="text-red-600 dark:text-red-400 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARD VIEW ================= */}
      <div className="md:hidden divide-y  divide-slate-200 dark:divide-slate-800">
        {projects.map((project) => (
          <div key={project.id} className="p-5">
            <div className="flex gap-4">
              <img
                src={project.projectImage}
                alt={project.title}
                className="h-14 w-14 rounded-xl object-cover border border-slate-200 dark:border-slate-800"
                onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/56?text=No+Img")
                }
              />

              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {project.description}
                </p>
                <div className="mt-1">
                  <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter">
                    {project.projectType}
                  </span>
                </div>
              </div>
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.languages.map((lang, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                >
                  {lang}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-3 flex flex-col gap-1">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 text-sm"
              >
                Preview
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 text-sm"
              >
                GitHub
              </a>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => onEdit(project)}
                className="text-blue-600 dark:text-blue-400 text-sm font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(project.id)}
                className="text-red-600 dark:text-red-400 text-sm font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="py-10 text-center text-slate-500 dark:text-slate-400">
          No projects yet. Add your first project 🚀
        </div>
      )}
    </div>
  );
};

export default ProjectTable;
