import { useState } from 'react';
import HomePage from './section/HomePage';
import About from './section/About';
import Education from './section/Education';
import TechnicalSkills from './section/TechnicalSkills';
import { MdHome, MdPsychology, MdSchool, MdPerson } from 'react-icons/md';

const HomeIndex = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Hero Content', icon: MdHome, component: HomePage },
    { id: 'skills', label: 'Skills', icon: MdPsychology, component: TechnicalSkills },
    { id: 'education', label: 'Education', icon: MdSchool, component: Education },
    { id: 'about', label: 'About Me', icon: MdPerson, component: About },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab).component;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Home Page Management
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2 text-lg">
          Configure the core sections of your portfolio's home screen.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-2xl w-fit">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300
                ${isActive
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-md transform scale-105"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800"
                }
              `}
            >
              <Icon className={`text-xl ${isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-400"}`} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
        <div className="animate-in fade-in zoom-in-95 duration-500">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};

export default HomeIndex;
