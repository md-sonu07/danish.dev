import { useState } from "react";
import { FiGithub, FiExternalLink, FiX, FiEye } from "react-icons/fi";
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
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Reveal delay={(index % 3) * 120}>
        <div 
          onClick={() => setShowModal(true)}
          className="group flex flex-col h-full bg-white dark:bg-[#1c2632] rounded-2xl overflow-hidden border border-[#f0f2f4] dark:border-[#2d3a4b] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
        >
          <div className="relative w-full aspect-3/2 overflow-hidden bg-slate-100 dark:bg-slate-900">
            {projectImage ? (
              <img
                src={projectImage}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400 dark:text-slate-600">No Image Available</span>
              </div>
            )}

            {/* Click to View overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
            >
              <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <FiEye className="text-base" />
                Click to View
              </span>
            </div>

            {projectType && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider pointer-events-none">
                {projectType}
              </span>
            )}

            <span className="absolute top-3 right-4 text-white/80 font-black text-3xl select-none drop-shadow pointer-events-none">
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
            <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {demoLink && (
                <a 
                  href={demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 min-w-[100px]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    text="Live"
                    icon={FiExternalLink}
                    iconPosition="right"
                    className="w-full flex items-center justify-center gap-2 h-10 px-4 rounded-md bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 text-sm font-bold hover:bg-emerald-500/20 dark:hover:bg-emerald-500/30 transition-all"
                  />
                </a>
              )}

              {githubLink && githubLink !== "#" && (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 min-w-[100px]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    text="GitHub"
                    icon={FiGithub}
                    iconPosition="right"
                    className="w-full flex items-center justify-center gap-2 h-10 px-4 rounded-md bg-[#f0f2f4] dark:bg-[#2d3a4b] text-[#111418] dark:text-white text-sm font-bold hover:bg-[#e2e4e7] dark:hover:bg-[#3d4a5c] transition-all"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Project Detail Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease]"></div>

          {/* Modal Content */}
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#1c2632] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-[#2d3a4b] animate-[modalSlideUp_0.3s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-20 size-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors cursor-pointer"
            >
              <FiX className="text-xl" />
            </button>

            <div className="overflow-y-auto max-h-[90vh] no-scrollbar">
              {/* Project Image */}
              <div className="relative w-full aspect-video bg-slate-100 dark:bg-slate-900">
                {projectImage ? (
                  <img
                    src={projectImage}
                    alt={title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-slate-400">No Preview Available</span>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {projectType && (
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                          {projectType}
                        </span>
                      )}
                      <span className="text-slate-400 text-sm font-bold">#{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#111418] dark:text-white">
                      {title}
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#617589] dark:text-gray-400 text-base leading-relaxed">
                  {description}
                </p>

                {/* Tech Stack */}
                {languages && languages.length > 0 && (
                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((lang, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-lg"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {demoLink && (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                    >
                      <FiExternalLink className="text-lg" />
                      Live Demo
                    </a>
                  )}
                  {githubLink && githubLink !== "#" && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#f0f2f4] dark:bg-[#2d3a4b] text-[#111418] dark:text-white font-bold text-sm hover:bg-[#e2e4e7] dark:hover:bg-[#3d4a5c] transition-all"
                    >
                      <FiGithub className="text-lg" />
                      View Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
