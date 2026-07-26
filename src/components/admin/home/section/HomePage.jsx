import { useState, useEffect } from "react";
import { MdSave, MdImage, MdTitle, MdDescription } from "react-icons/md";

const HomePage = () => {
  const [homeData, setHomeData] = useState({
    heroTitle: "",
    heroDescription: "",
    heroImage: "",
    aboutTitle: "",
    aboutDescription: "",
    skillsTitle: "",
    skillsDescription: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Load existing home page data
    const savedData = localStorage.getItem("homePageData");
    if (savedData) {
      setHomeData(JSON.parse(savedData));
    } else {
      // Set default values
      setHomeData({
        heroTitle: "Hi, I'm [Your Name]",
        heroDescription: "Full Stack Developer | React | Node.js | MongoDB",
        heroImage: "/title_img.png",
        aboutTitle: "About Me",
        aboutDescription: "Passionate developer with expertise in modern web technologies.",
        skillsTitle: "Skills & Expertise",
        skillsDescription: "Technologies I work with"
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHomeData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage("");
    
    try {
      // Save to localStorage (in a real app, this would be an API call)
      localStorage.setItem("homePageData", JSON.stringify(homeData));
      setMessage("Home page data saved successfully!");
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("Error saving data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset to default values?")) {
      const defaultData = {
        heroTitle: "Hi, I'm [Your Name]",
        heroDescription: "Full Stack Developer | React | Node.js | MongoDB",
        heroImage: "/title_img.png",
        aboutTitle: "About Me",
        aboutDescription: "Passionate developer with expertise in modern web technologies.",
        skillsTitle: "Skills & Expertise",
        skillsDescription: "Technologies I work with"
      };
      setHomeData(defaultData);
      setMessage("Reset to default values. Click save to apply changes.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Home Page Customization
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Customize the content displayed on your home page
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
          >
            Reset to Default
          </button>
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition flex items-center gap-2 disabled:opacity-50"
          >
            <MdSave />
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Message */}
      {message && (
        <div className={`px-4 py-3 rounded-lg ${
          message.includes("Error") 
            ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800"
            : "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
        }`}>
          {message}
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <MdImage className="text-xl text-blue-600" />
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Hero Section
          </h2>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Main Title (H1)
            </label>
            <input
              type="text"
              name="heroTitle"
              value={homeData.heroTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter main title"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Subtitle/Description
            </label>
            <textarea
              name="heroDescription"
              value={homeData.heroDescription}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              placeholder="Enter subtitle or description"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Profile Image URL
            </label>
            <input
              type="url"
              name="heroImage"
              value={homeData.heroImage}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter image URL"
            />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default HomePage;
