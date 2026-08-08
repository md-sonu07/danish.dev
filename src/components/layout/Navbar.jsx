import { useState } from "react";
import NavLogo from "../common/NavLogo";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-3 pb-2 border-t border-gray-100 dark:border-slate-800">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-3 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
