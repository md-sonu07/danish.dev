import { FiGithub } from "react-icons/fi";
import { VscPreview } from "react-icons/vsc";
import Button from "./Button";
import Reveal from "./Reveal";

const ProjectCard = ({
  index = 0,
  projectImage,
  languages,
  title,
  description,
  demoLink,
  githubLink,
  projectType,
}) => {
  return (
    <Reveal delay={(index % 3) * 120}>
      <div className="group flex flex-col h-full bg-white dark:bg-[#1c2632] rounded-2xl overflow-hidden border border-[#f0f2f4] dark:border-[#2d3a4b] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
        <div className="relative w-full aspect-3/2 overflow-hidden">
          {projectImage ? (
            <img
              src={projectImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
              <span className="text-slate-400 dark:text-slate-600">No Image Available</span>
            </div>
          )}

          {/* Hover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {projectType && (
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
              {projectType}
            </span>
          )}

          <span className="absolute top-3 right-4 text-white/80 font-black text-3xl select-none drop-shadow">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex flex-wrap gap-2 mb-4">
            {languages &&
              languages.map((lang, i) => (
                <span
                  key={i}
                  className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                >
                  {lang}
                </span>
              ))}
          </div>

          <h3 className="text-[#111418] dark:text-white text-xl font-bold mb-2">
            {title}
          </h3>
          <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
            {description}
          </p>

          <div className="flex gap-3">
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button
                  text="Preview"
                  icon={VscPreview}
                  iconPosition="right"
                  className="w-full flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/80 transition-all"
                />
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button
                  text="GitHub"
                  icon={FiGithub}
                  iconPosition="right"
                  className="w-full flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#f0f2f4] dark:bg-[#2d3a4b] text-[#111418] dark:text-white text-sm font-bold hover:bg-[#e2e4e7] dark:hover:bg-[#3d4a5c] transition-all"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
