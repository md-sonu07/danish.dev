import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
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

  return (
    <footer className="mt-28 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center gap-6">

        <div className="text-center space-y-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Danish.dev
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Full-Stack Developer | React | Node.js | Building scalable web applications
          </p>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.url}
              className="p-2 rounded-full text-gray-500 hover:text-primary hover:bg-primary/10 transition-all"
            >
              <link.icon className="text-lg" />
            </Link>
          ))}

        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Danish.dev • Open to opportunities & collaborations
        </p>
      </div>
    </footer>
  );
};

export default Footer;
