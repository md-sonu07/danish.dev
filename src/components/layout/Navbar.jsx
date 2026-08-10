import { useState } from "react";
import { createPortal } from "react-dom";
import NavLogo from "../common/NavLogo";
import { MdMenu, MdClose, MdHome, MdPerson, MdStar, MdWork, MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home", icon: <MdHome className="text-xl" /> },
    { label: "About", href: "#about", icon: <MdPerson className="text-xl" /> },
    { label: "Skills", href: "#skills", icon: <MdStar className="text-xl" /> },
    { label: "Projects", href: "#projects", icon: <MdWork className="text-xl" /> },
    { label: "Contact", href: "#contact", icon: <MdEmail className="text-xl" /> },
  ];

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full glass-nav px-6 md:px-10 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <NavLogo />
        <div className="hidden md:flex flex-1 justify-end gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold hover:text-primary text-gray-700 dark:text-gray-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 cursor-pointer rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Open menu"
          >
            <MdMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer via Portal */}
      {typeof document !== "undefined" && createPortal(
        <>
          {/* Mobile Drawer Overlay */}
          <div 
            className={`md:hidden fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[60] transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Mobile Drawer Menu */}
          <div 
            className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-white dark:bg-slate-900 border-l border-gray-100 dark:border-slate-800 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex flex-col h-full">
              <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-slate-800 mb-2">
                <div onClick={handleLinkClick}>
                  <NavLogo />
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close menu"
                >
                  <MdClose className="text-2xl" />
                </button>
              </div>
              <div className="flex flex-col gap-2 px-4 py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="px-4 py-3 rounded-md text-base font-bold text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-3"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;
