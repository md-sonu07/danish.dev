import { useState, useEffect } from "react";
import { toast } from 'react-hot-toast';
import ConfirmationModal from "../../common/ConfirmationModal";
import { MdSave, MdAdd, MdDelete, MdWork, MdSchool, MdDescription, MdPerson, MdAutoAwesome } from "react-icons/md";

const ResumeDetails = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: ""
    },
    summary: "",
    experience: [],
    education: [],
    skills: []
  });

  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    onConfirm: () => { },
    title: "",
    message: ""
  });

  useEffect(() => {
    const savedData = localStorage.getItem("resumeData");
    if (savedData) {
      setResumeData(JSON.parse(savedData));
    } else {
      setResumeData({
        personalInfo: {
          name: "Danish Farhan",
          title: "Full Stack Developer",
          email: "danish@example.com",
          phone: "+92 300 1234567",
          location: "Lahore, Pakistan",
          linkedin: "https://linkedin.com/in/danishfarhan",
          github: "https://github.com/danishfarhan"
        },
        summary: "I am a passionate Full Stack Developer with expertise in the MERN stack.",
        experience: [],
        education: [],
        skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Tailwind CSS"]
      });
    }
  }, []);

  const handlePersonalInfoChange = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const handleSummaryChange = (value) => {
    setResumeData(prev => ({
      ...prev,
      summary: value
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        id: Date.now(),
        company: "",
        position: "",
        duration: "",
        description: ""
      }]
    }));
  };

  const updateExperience = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const deleteExperience = (id) => {
    setModalConfig({
      isOpen: true,
      onConfirm: () => {
        setResumeData(prev => ({
          ...prev,
          experience: prev.experience.filter(exp => exp.id !== id)
        }));
      },
      title: "Remove Milestone?",
      message: "Are you sure you want to strike this professional experience from your records?"
    });
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, {
        id: Date.now(),
        institution: "",
        degree: "",
        duration: "",
        description: ""
      }]
    }));
  };

  const updateEducation = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const deleteEducation = (id) => {
    setModalConfig({
      isOpen: true,
      onConfirm: () => {
        setResumeData(prev => ({
          ...prev,
          education: prev.education.filter(edu => edu.id !== id)
        }));
      },
      title: "Purge Academic Record?",
      message: "Are you sure you want to permanently remove this educational entry?"
    });
  };

  const handleSkillsChange = (value) => {
    const skillsArray = value.split(',').map(skill => skill.trim()).filter(Boolean);
    setResumeData(prev => ({
      ...prev,
      skills: skillsArray
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      localStorage.setItem("resumeData", JSON.stringify(resumeData));
      toast.success("Professional legacy synchronized successfully.");
    } catch (error) {
      toast.error("Critical error: Failed to sync resume data.");
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: "personal", label: "Identity", icon: MdPerson },
    { id: "summary", label: "Executive Summary", icon: MdDescription },
    { id: "experience", label: "Experience", icon: MdWork },
    { id: "education", label: "Education", icon: MdSchool },
    { id: "skills", label: "Tech Stack", icon: MdAutoAwesome }
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs">
            <MdDescription className="text-lg" />
            <span>Resume Builder</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Curate your <span className="bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Professional Legacy</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Manage your credentials and career milestones.
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={loading}
          className="group px-8 py-4 flex gap-3 items-center rounded-2xl cursor-pointer bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 transition shadow-xl active:scale-95 disabled:opacity-50"
        >
          <MdSave className="text-xl" />
          <span>{loading ? "Syncing..." : "Save Changes"}</span>
        </button>
      </div>

      {/* Navigation Tabs at Top */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-2 sticky top-8 z-50 shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-md">
        <nav className="flex flex-wrap md:flex-nowrap gap-2 overflow-x-auto scrollbar-hide p-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm whitespace-nowrap transition-all duration-300 min-w-[140px] ${isActive
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 scale-105 z-10"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  }`}
              >
                <Icon className="text-xl shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Content Area */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-10 shadow-sm min-h-[600px] relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>

        <div className="animate-in fade-in zoom-in-95 duration-500 relative z-10">

          {/* Identity Tab */}
          {activeTab === "personal" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Personal Identity</h2>
                <p className="text-slate-500 font-medium">How you appear to potential clients and recruiters.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: "Full Name", field: "name", type: "text" },
                  { label: "Professional Title", field: "title", type: "text" },
                  { label: "Email Address", field: "email", type: "email" },
                  { label: "Phone Number", field: "phone", type: "tel" },
                  { label: "Location", field: "location", type: "text" },
                  { label: "LinkedIn Profile", field: "linkedin", type: "url" },
                  { label: "GitHub Profile", field: "github", type: "url", fullWidth: true },
                ].map((input) => (
                  <div key={input.field} className={input.fullWidth ? "md:col-span-2" : ""}>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-1">
                      {input.label}
                    </label>
                    <input
                      type={input.type}
                      value={resumeData.personalInfo[input.field]}
                      onChange={(e) => handlePersonalInfoChange(input.field, e.target.value)}
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white font-bold focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Summary Tab */}
          {activeTab === "summary" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Executive Summary</h2>
                <p className="text-slate-500 font-medium">Capture attention with a powerful career narrative.</p>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-1">
                  A brief overview of your expertise
                </label>
                <textarea
                  value={resumeData.summary}
                  onChange={(e) => handleSummaryChange(e.target.value)}
                  rows="10"
                  className="w-full px-6 py-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white font-medium focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all resize-none leading-relaxed"
                  placeholder="Describe your professional journey and key impact..."
                />
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Work Experience</h2>
                  <p className="text-slate-500 font-medium">Your career progression and key achievements.</p>
                </div>
                <button
                  onClick={addExperience}
                  className="p-4 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 transition flex items-center justify-center shadow-lg shadow-indigo-500/20 active:scale-95"
                >
                  <MdAdd className="text-2xl" />
                </button>
              </div>

              {resumeData.experience.length === 0 ? (
                <div className="py-20 text-center bg-slate-50 dark:bg-slate-800/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                  <MdWork className="text-6xl text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                  <p className="text-xl font-bold text-slate-400">No experience records found.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {resumeData.experience.map((exp) => (
                    <div key={exp.id} className="group relative border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 rounded-3xl p-8 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
                      <button
                        onClick={() => deleteExperience(exp.id)}
                        className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-90"
                      >
                        <MdDelete />
                      </button>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Company</label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold outline-none focus:ring-2 focus:ring-indigo-500/20"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Position</label>
                          <input
                            type="text"
                            value={exp.position}
                            onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold outline-none focus:ring-2 focus:ring-indigo-500/20"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Duration</label>
                          <input
                            type="text"
                            value={exp.duration}
                            onChange={(e) => updateExperience(exp.id, "duration", e.target.value)}
                            placeholder="Jan 2022 - Present"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold outline-none focus:ring-2 focus:ring-indigo-500/20"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Impact & Responsibility</label>
                          <textarea
                            value={exp.description}
                            onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                            rows="4"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Education</h2>
                  <p className="text-slate-500 font-medium">Academic background and continuous learning.</p>
                </div>
                <button
                  onClick={addEducation}
                  className="p-4 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 transition flex items-center justify-center shadow-lg shadow-indigo-500/20 active:scale-95"
                >
                  <MdAdd className="text-2xl" />
                </button>
              </div>

              {resumeData.education.length === 0 ? (
                <div className="py-20 text-center bg-slate-50 dark:bg-slate-800/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                  <MdSchool className="text-6xl text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                  <p className="text-xl font-bold text-slate-400">No education entries.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {resumeData.education.map((edu) => (
                    <div key={edu.id} className="group relative border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 rounded-3xl p-8 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
                      <button
                        onClick={() => deleteEducation(edu.id)}
                        className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-90"
                      >
                        <MdDelete />
                      </button>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Institution</label>
                          <input
                            type="text"
                            value={edu.institution}
                            onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold outline-none focus:ring-2 focus:ring-indigo-500/20"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Degree</label>
                          <input
                            type="text"
                            value={edu.degree}
                            onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold outline-none focus:ring-2 focus:ring-indigo-500/20"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Duration</label>
                          <input
                            type="text"
                            value={edu.duration}
                            onChange={(e) => updateEducation(edu.id, "duration", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold outline-none focus:ring-2 focus:ring-indigo-500/20"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Details</label>
                          <textarea
                            value={edu.description}
                            onChange={(e) => updateEducation(edu.id, "description", e.target.value)}
                            rows="3"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Tech Stack & Mastery</h2>
                <p className="text-slate-500 font-medium">The technologies and tools you excel in.</p>
              </div>
              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4 px-1">
                    Skill Inventory (Comma Separated)
                  </label>
                  <textarea
                    value={resumeData.skills.join(", ")}
                    onChange={(e) => handleSkillsChange(e.target.value)}
                    rows="6"
                    className="w-full px-8 py-6 rounded-4xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white font-bold focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all resize-none leading-relaxed"
                    placeholder="React, Node.js, MongoDB, JavaScript..."
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Live Preview</p>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.length === 0 ? (
                      <span className="text-slate-400 font-bold text-sm italic">Add some skills above to see them visualized...</span>
                    ) : (
                      resumeData.skills.map((skill, i) => (
                        <span key={i} className="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 font-bold text-sm border border-indigo-100 dark:border-indigo-800 animate-in zoom-in duration-300">
                          {skill}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <ConfirmationModal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        onConfirm={modalConfig.onConfirm}
        title={modalConfig.title}
        message={modalConfig.message}
        confirmText="Confirm Purge"
      />
    </div>
  );
};

export default ResumeDetails;
