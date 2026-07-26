import { MdAdd, MdDelete, MdEdit, MdTitle } from "react-icons/md";
import ConfirmationModal from "../../../common/ConfirmationModal";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";

const TechnicalSkills = () => {
  const [skillsData, setSkillsData] = useState([
    {
      category: "Frontend",
      items: [
        {
          name: "HTML",
          description: "Structure of web pages",
          icon: FaHtml5
        },
        {
          name: "CSS",
          description: "Styling and design",
          icon: FaCss3Alt
        },
        {
          name: "JavaScript",
          description: "Interactive functionality",
          icon: FaJs
        },
        {
          name: "React",
          description: "Component-based UI library",
          icon: FaReact
        }
      ]
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          description: "Server-side JavaScript runtime",
          icon: FaNodeJs
        },
        {
          name: "Python",
          description: "General-purpose programming",
          icon: FaPython
        }
      ]
    },
    {
      category: "Tools",
      items: [
        {
          name: "Git",
          description: "Version control system",
          icon: FaGitAlt
        }
      ]
    }
  ]);

  const [editingCategory, setEditingCategory] = useState(null);
  const [editingSkill, setEditingSkill] = useState(null);
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: "",
    message: "",
    onConfirm: () => { }
  });

  // Default icon mapping
  const iconMap = {
    "HTML": FaHtml5,
    "CSS": FaCss3Alt,
    "JavaScript": FaJs,
    "React": FaReact,
    "Node.js": FaNodeJs,
    "Git": FaGitAlt,
    "Python": FaPython
  };

  const handleAddCategory = () => {
    const newCategory = {
      category: "New Category",
      items: []
    };
    setSkillsData([...(skillsData || []), newCategory]);
  };

  const handleUpdateCategory = (index, newCategoryName) => {
    const updatedSkills = [...(skillsData || [])];
    updatedSkills[index].category = newCategoryName;
    setSkillsData(updatedSkills);
    setEditingCategory(null);
  };

  const handleDeleteCategory = (index) => {
    setModalConfig({
      isOpen: true,
      title: "Remove Domain?",
      message: "Are you sure you want to delete this skill category and all its entries? This action is final.",
      onConfirm: () => {
        const updatedSkills = [...(skillsData || [])];
        updatedSkills.splice(index, 1);
        setSkillsData(updatedSkills);
      }
    });
  };

  const handleAddSkill = (categoryIndex) => {
    const newSkill = {
      name: "New Skill",
      description: "Skill description",
      icon: FaJs
    };
    const updatedSkills = [...(skillsData || [])];
    updatedSkills[categoryIndex].items.push(newSkill);
    setSkillsData(updatedSkills);
  };

  const handleUpdateSkill = (categoryIndex, skillIndex, updatedSkill) => {
    const updatedSkills = [...(skillsData || [])];
    updatedSkills[categoryIndex].items[skillIndex] = {
      ...updatedSkill,
      icon: iconMap[updatedSkill.name] || FaJs
    };
    setSkillsData(updatedSkills);
    setEditingSkill(null);
  };

  const handleDeleteSkill = (categoryIndex, skillIndex) => {
    setModalConfig({
      isOpen: true,
      title: "Neutralize Mastery?",
      message: "Are you sure you want to strike this technology from your expertise radar?",
      onConfirm: () => {
        const updatedSkills = [...(skillsData || [])];
        updatedSkills[categoryIndex].items.splice(skillIndex, 1);
        setSkillsData(updatedSkills);
      }
    });
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <MdTitle className="text-xl text-blue-600" />
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Technical Skills
          </h2>
        </div>
        <button
          onClick={handleAddCategory}
          className="px-4 py-2 flex items-center gap-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <MdAdd /> Add Category
        </button>
      </div>

      <div className="space-y-6">
        {(skillsData || []).map((category, categoryIndex) => (
          <div key={categoryIndex} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            {/* Category Header */}
            <div className="flex items-center justify-between mb-4">
              {editingCategory === categoryIndex ? (
                <input
                  type="text"
                  defaultValue={category.category}
                  onBlur={(e) => handleUpdateCategory(categoryIndex, e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleUpdateCategory(categoryIndex, e.target.value);
                    }
                  }}
                  className="text-lg font-semibold text-slate-900 dark:text-white bg-transparent border-b border-blue-500 outline-none"
                  autoFocus
                />
              ) : (
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {category.category}
                </h3>
              )}

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEditingCategory(categoryIndex)}
                  className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition"
                >
                  <MdEdit />
                </button>
                <button
                  onClick={() => handleDeleteCategory(categoryIndex)}
                  className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
                >
                  <MdDelete />
                </button>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {category.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                  {editingSkill === `${categoryIndex}-${skillIndex}` ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        defaultValue={skill.name}
                        placeholder="Skill name"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm"
                        id={`skill-name-${categoryIndex}-${skillIndex}`}
                      />
                      <textarea
                        defaultValue={skill.description}
                        placeholder="Skill description"
                        rows="2"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm resize-none"
                        id={`skill-desc-${categoryIndex}-${skillIndex}`}
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            const nameInput = document.getElementById(`skill-name-${categoryIndex}-${skillIndex}`);
                            const descInput = document.getElementById(`skill-desc-${categoryIndex}-${skillIndex}`);
                            handleUpdateSkill(categoryIndex, skillIndex, {
                              name: nameInput.value,
                              description: descInput.value
                            });
                          }}
                          className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingSkill(null)}
                          className="px-3 py-1 bg-slate-600 text-white rounded-lg text-sm hover:bg-slate-700 transition"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <skill.icon className="text-xl text-blue-600" />
                          <h4 className="font-medium text-slate-900 dark:text-white">
                            {skill.name}
                          </h4>
                        </div>
                        <div className="flex gap-1">
                          <button
                            onClick={() => setEditingSkill(`${categoryIndex}-${skillIndex}`)}
                            className="p-1 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition"
                          >
                            <MdEdit size={14} />
                          </button>
                          <button
                            onClick={() => handleDeleteSkill(categoryIndex, skillIndex)}
                            className="p-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition"
                          >
                            <MdDelete size={14} />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {skill.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Add Skill Button */}
            <button
              onClick={() => handleAddSkill(categoryIndex)}
              className="w-full py-2 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-400 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <MdAdd className="inline mr-2" />
              Add Skill
            </button>
          </div>
        ))}

        {/* Empty State */}
        {(!skillsData || skillsData.length === 0) && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No skill categories yet. Add your first category to get started.
          </div>
        )}
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

export default TechnicalSkills
