import { FiGithub } from "react-icons/fi";
import { VscPreview } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Button from "./Button";

const ProjectCard = ({
  idx,
  projectImage,
  languages,
  title,
  description,
  demoLink,
  githubLink,
}) => {
  return (
    <div
      key={idx}
      className="flex flex-col bg-white dark:bg-[#1c2632] rounded-2xl overflow-hidden border border-[#f0f2f4] dark:border-[#2d3a4b] shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative w-full aspect-3/2 overflow-hidden">
        {projectImage ? (
          <img
            src={projectImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
            <span className="text-slate-400 dark:text-slate-600">No Image Available</span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {languages &&
            languages.map((lang, index) => (
              <span
                key={index}
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
            <Link to={demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button
                text="Preview"
                icon={VscPreview}
                iconPosition="right"
                className="w-full flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary text-white dark:bg-[#2d3a4b]  dark:text-white text-sm font-bold hover:bg-primary/80 dark:hover:bg-[#3d4a5c] transition-all"
              />
            </Link>
          )}
          {githubLink && (
            <Link to={githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button
                text="GitHub"
                icon={FiGithub}
                iconPosition="right"
                className="w-full flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#f0f2f4] dark:bg-[#2d3a4b] text-[#111418] dark:text-white text-sm font-bold hover:bg-[#e2e4e7] dark:hover:bg-[#3d4a5c] transition-all"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
