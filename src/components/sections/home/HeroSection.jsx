import { useEffect, useState } from "react";
import portfolioImage from "../../../assets/portfolio_img.jpeg";
import { TiArrowRight, TiArrowDown } from "react-icons/ti";
import { FaGithub, FaLinkedinIn, FaInstagram, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { MdCode, MdDevices, MdVerified } from "react-icons/md";
import Button from "../../common/Button";
import { profileData } from "../../../data/portfolioData";

const ROLES = [
  "Full-Stack Developer",
  "MERN Stack Specialist",
  "Frontend Enthusiast",
  "Problem Solver",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timer;

    if (!deleting && typed === current) {
      timer = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && typed === "") {
      timer = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, 300);
    } else {
      timer = setTimeout(
        () => setTyped(current.slice(0, typed.length + (deleting ? -1 : 1))),
        deleting ? 35 : 90
      );
    }

    return () => clearTimeout(timer);
  }, [typed, deleting, roleIndex]);

  const socials = [
    { icon: FaGithub, url: profileData.github || "#", label: "GitHub" },
    { icon: FaLinkedinIn, url: profileData.linkedin || "#", label: "LinkedIn" },
    { icon: FaInstagram, url: profileData.instagram || "#", label: "Instagram" },
  ];

  const highlights = [
    { icon: MdCode, label: "MERN Stack Developer" },
    { icon: MdDevices, label: "Responsive Design" },
    { icon: MdVerified, label: "Clean, Scalable Code" },
  ];

  return (
    <section className="relative py-16 md:py-28 overflow-hidden">
      {/* Decorative background blobs */}
      {/* <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob pointer-events-none"></div> */}
      {/* <div
        className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-blob pointer-events-none"
        style={{ animationDelay: "-7s" }}
      ></div> */}

      <div className="relative flex flex-col-reverse lg:flex-row items-center gap-14">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="inline-flex items-center gap-2.5 w-fit px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wide">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
            </span>
            Open to Opportunities
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-[#111418] dark:text-white">
              Hi, I'm <span className="text-gradient">Danish</span>.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-300 min-h-[3rem] sm:min-h-[2.5rem]">
              {(typed || !deleting) && <span className="text-primary font-black">&gt; </span>}{typed}
              <span className="cursor-blink text-primary">|</span>
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              I'm an aspiring full-stack developer and BCA student at VVIT, passionate
              about building interactive, scalable web applications with clean and
              maintainable code.
            </p>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 max-w-xl">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <h.icon className="text-sm text-primary" />
                </div>
                <span className="text-sm font-bold">{h.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs + Socials */}
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#contact">
              <Button
                iconPosition="left"
                text="Let's Talk"
                className="h-14 px-8 bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20"
                icon={TiArrowRight}
              />
            </a>
            <a href="#projects">
              <Button
                text="View Projects"
                className="h-14 px-8 bg-white border border-gray-200 text-[#111418] hover:bg-gray-50 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
              />
            </a>
            <div className="flex items-center gap-2 ml-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-3 rounded-xl text-gray-500 hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <s.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Portrait */}
        <div className="w-full lg:w-1/2 max-w-md relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 to-cyan-400/25 rounded-[2.5rem] rotate-6"></div>
          <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-sm ring-1 ring-white/60 dark:ring-white/10 animate-float">
            <img className="w-full h-full object-cover" src={portfolioImage} alt="Danish" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Floating tech badges */}
          <div
            className="absolute -left-6 top-10 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 shadow-lg border border-gray-100 dark:border-slate-800 text-sm font-bold flex items-center gap-2 animate-float"
            style={{ animationDelay: "-2s" }}
          >
            <FaReact className="text-cyan-500" /> React
          </div>
          <div
            className="absolute -right-4 top-1/3 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 shadow-lg border border-gray-100 dark:border-slate-800 text-sm font-bold flex items-center gap-2 animate-float"
            style={{ animationDelay: "-4s" }}
          >
            <FaNodeJs className="text-green-500" /> Node.js
          </div>
          <div
            className="absolute -left-4 bottom-16 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 shadow-lg border border-gray-100 dark:border-slate-800 text-sm font-bold flex items-center gap-2 animate-float"
            style={{ animationDelay: "-1s" }}
          >
            <SiMongodb className="text-emerald-500" /> MongoDB
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hidden lg:flex flex-col items-center gap-2 mt-16 text-gray-400 hover:text-primary transition-colors"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
        <TiArrowDown className="text-xl animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
