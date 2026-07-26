import { Link, NavLink } from "react-router-dom";
import NavLogo from "../common/NavLogo";
import Button from "../common/Button";

import portfolioImage from "../../assets/portfolio_img.jpeg";

const Navbar = () => {
  const navLinks = ["About", "Projects", "Resume", "Contact"];

  return (
    <nav className="sticky top-0 z-50 w-full glass-nav px-6 md:px-10 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <NavLogo />
        <div className="hidden md:flex flex-1 justify-center gap-10">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={`/${link.toLowerCase()}`}
              className={({ isActive }) =>
                `${isActive ? "text-primary" : ""} text-sm font-bold hover:text-primary text-gray-700 transition-colors`
              }
            >
              {link}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div
            className="size-10 ring-2 ring-primary/30 rounded-full border-2 border-primary/20 bg-cover bg-center"
            style={{ backgroundImage: `url(${portfolioImage})` }}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
