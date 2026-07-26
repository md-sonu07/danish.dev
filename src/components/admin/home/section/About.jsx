import React, { useState } from "react";
import { MdDescription } from "react-icons/md";

const About = () => {
  const [aboutData, setAboutData] = useState({
    title: "About Me",
    description: "Passionate developer with expertise in modern web technologies."
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAboutData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem("aboutData", JSON.stringify(aboutData));
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reload from localStorage to cancel changes
    const savedData = localStorage.getItem("aboutData");
    if (savedData) {
      setAboutData(JSON.parse(savedData));
    }
  };

  return (
    <section>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MdDescription className="text-xl text-blue-600" />
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              About Section
            </h2>
          </div>
          {!isEditing ? (
            <button
              onClick={handleEdit}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-lg bg-slate-600 text-white hover:bg-slate-700 transition"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        
        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Section Title
              </label>
              <input
                type="text"
                name="title"
                value={aboutData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter about section title"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                About Description
              </label>
              <textarea
                name="description"
                value={aboutData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                placeholder="Enter about description"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {aboutData.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {aboutData.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About