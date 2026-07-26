import { MdSchool, MdAdd, MdEdit, MdDelete } from "react-icons/md";
import ConfirmationModal from "../../../common/ConfirmationModal";

const Education = () => {
  const [educationData, setEducationData] = useState([
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2018 - 2022",
      description: "Focused on software development and algorithms"
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [indexToDelete, setIndexToDelete] = useState(null);

  const handleAdd = () => {
    const newEducation = {
      id: Date.now(),
      degree: "New Degree",
      institution: "Institution Name",
      period: "Start Year - End Year",
      description: "Education description"
    };
    setEducationData([...educationData, newEducation]);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setIsEditing(true);
  };

  const handleDelete = (index) => {
    setIndexToDelete(index);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (indexToDelete !== null) {
      setEducationData(educationData.filter((_, i) => i !== indexToDelete));
      setIndexToDelete(null);
    }
  };

  const handleSave = (index, field, value) => {
    const updatedData = [...educationData];
    updatedData[index] = {
      ...updatedData[index],
      [field]: value
    };
    setEducationData(updatedData);
  };

  const handleDone = () => {
    setIsEditing(false);
    setEditingIndex(null);
    // Save to localStorage
    localStorage.setItem("educationData", JSON.stringify(educationData));
  };

  return (
    <section>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <MdSchool className="text-xl text-blue-600" />
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Education Section
            </h2>
          </div>
          <button
            onClick={handleAdd}
            className="px-4 py-2 flex items-center gap-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <MdAdd /> Add Education
          </button>
        </div>

        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <div key={edu.id} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              {isEditing && editingIndex === index ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Degree
                    </label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => handleSave(index, 'degree', e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Enter degree"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Institution
                    </label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => handleSave(index, 'institution', e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Enter institution name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Period
                    </label>
                    <input
                      type="text"
                      value={edu.period}
                      onChange={(e) => handleSave(index, 'period', e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Enter period (e.g., 2018 - 2022)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Description
                    </label>
                    <textarea
                      value={edu.description}
                      onChange={(e) => handleSave(index, 'description', e.target.value)}
                      rows="3"
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                      placeholder="Enter education description"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleDone}
                      className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                    >
                      Done
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-500">
                        {edu.period}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition"
                      >
                        <MdEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">
                    {edu.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {educationData.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No education entries yet. Add your first education to get started.
          </div>
        )}
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        title="Remove Academic Record?"
        message="Are you sure you want to strike this education entry from your portfolio? This action is permanent."
        confirmText="Confirm Deletion"
      />
    </section>
  );
};

export default Education
