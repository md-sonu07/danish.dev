import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdAdd,
  MdLogout,
  MdMenu,
  MdClose,
  MdArrowForwardIos,
  MdEmail,
  MdPerson
} from "react-icons/md";
import { useState } from "react";

const AdminSidebar = ({ onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "Dashboard",
      icon: MdDashboard,
      path: "/admin",
      exact: true
    },
    {
      title: "Projects",
      icon: MdAdd,
      path: "/admin/projects"
    },
    {
      title: "Profile & Contact",
      icon: MdPerson,
      path: "/admin/profile"
    },
    {
      title: "Messages",
      icon: MdEmail,
      path: "/admin/messages"
    }
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button - Floating Style */}
      <div className="md:hidden fixed top-6 right-6 z-1000">
        <button
          onClick={handleMobileMenuToggle}
          className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
        >
          {isMobileMenuOpen ? (
            <MdClose className="text-2xl" />
          ) : (
            <MdMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Overlay with Blur */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-900 animate-in fade-in transition-all duration-500"
          onClick={handleMobileMenuToggle}
        ></div>
      )}

      {/* Sidebar - Sleek and Modern */}
      <div className={`fixed md:sticky top-0 h-screen z-950 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}>
        <div className="w-72 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-900 h-full flex flex-col p-6 overflow-y-auto">
          {/* Brand Logo / Section */}
          <div className="mb-10 p-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <MdDashboard className="text-2xl" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                  Admin <span className="text-blue-600">Pro</span>
                </h2>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Workspace v2.0</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <p className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 px-4">
              Main Navigation
            </p>
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.exact}
                      onClick={handleMenuItemClick}
                      className={({ isActive }) =>
                        `group flex items-center justify-between px-4 py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${isActive
                          ? "bg-blue-600 text-white shadow-xl shadow-blue-500/20"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white"
                        }`
                      }
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="text-xl shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <MdArrowForwardIos className={`text-[10px] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1`} />
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Profile / Logout Section */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-900">
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">
                  DF
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-black text-slate-900 dark:text-white truncate">Danish Farhan</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Developer</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onLogout();
                handleMenuItemClick();
              }}
              className="flex items-center gap-4 w-full px-4 py-4 rounded-2xl text-red-500 font-black text-sm hover:bg-red-50 dark:hover:bg-red-900/10 transition-all active:scale-95"
            >
              <MdLogout className="text-xl shrink-0" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
