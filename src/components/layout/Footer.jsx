import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { useSelector } from "react-redux";

const Footer = () => {
  const { data: profile } = useSelector((state) => state.profile);

  const socialLinks = [
    {
      name: "LinkedIn",
      url: profile?.linkedin || "https://www.linkedin.com/in/md-sonu-b369a632a/",
      icon: FaLinkedinIn,
    },
    {
      name: "GitHub",
      url: profile?.github || "https://github.com/md-sonu07",
      icon: FaGithub,
    },
    {
      name: "Instagram",
      url: profile?.instagram || "https://www.instagram.com/danish_farhan07/",
      icon: FaInstagram,
    },
  ];

  const exploreLinks = ["About", "Skills", "Projects", "Contact"];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white/40 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Danish<span className="text-primary">.dev</span>
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Full-Stack Developer building scalable web applications with the MERN stack.
          </p>
          <div className="flex items-center gap-3 pt-1">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-500 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <link.icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div className="md:justify-self-center">
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-4">
            Explore
          </h4>
          <ul className="space-y-3">
            {exploreLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Open to work */}
        <div className="md:justify-self-end md:text-right">
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-4">
            Open to Work
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Looking for internships and opportunities in web development.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 text-sm font-bold text-primary hover:underline"
          >
            Get in touch &rarr;
          </a>
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Danish.dev &bull; Built with React, Node &amp; MongoDB
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-primary transition-colors"
          >
            Back to top <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
