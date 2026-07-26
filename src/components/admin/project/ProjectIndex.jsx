import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProjects,
  addProject,
  editProject,
  removeProject,
} from "../../../store/project/projectThunks";
import { clearError, clearSuccess } from "../../../store/project/projectSlice";
import { MdAdd, MdWorkOutline, MdRefresh } from "react-icons/md";
import { toast } from "react-hot-toast";
import ConfirmationModal from "../../common/ConfirmationModal";
import ProjectForm from "./ProjectForm";
import ProjectTable from "./ProjectTable";

const ProjectIndex = () => {
  const dispatch = useDispatch();
  const { projects, loading, error, success } = useSelector(
    (state) => state.projects
  );
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (success) {
      toast.success(success);
      dispatch(clearSuccess());
    }
  }, [error, success, dispatch]);

  const handleAddProject = () => {
    setEditingProject(null);
    setShowForm(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleDeleteProject = (projectId) => {
    setProjectToDelete(projectId);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (projectToDelete) {
      dispatch(removeProject(projectToDelete));
      setProjectToDelete(null);
    }
  };

  const handleFormSubmit = (projectData) => {
    if (editingProject) {
      dispatch(editProject({ id: editingProject.id, projectData }));
    } else {
      dispatch(addProject(projectData));
    }
    setShowForm(false);
    setEditingProject(null);
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingProject(null);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs">
            <MdWorkOutline className="text-lg" />
            <span>Project Management</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Manage your <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Creative Work</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Showcase your best engineering achievements.
          </p>
        </div>

        {!showForm && (
          <button
            onClick={handleAddProject}
            className="group px-8 py-4 flex gap-3 items-center rounded-2xl cursor-pointer bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-500/20 active:scale-95"
          >
            <MdAdd className="text-xl" />
            <span>Create New Project</span>
          </button>
        )}
      </div>

      {/* Form Area */}
      {showForm && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-sm overflow-hidden relative">
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <div className="flex items-center justify-between mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                {editingProject ? 'Edit Project' : 'Add New Showcase'}
              </h2>
              <button onClick={handleFormCancel} className="text-sm font-bold text-slate-500 hover:text-slate-900">Cancel</button>
            </div>
            <ProjectForm
              project={editingProject}
              onSubmit={handleFormSubmit}
              onCancel={handleFormCancel}
            />
          </div>
        </div>
      )}

      {/* Projects Table / Display */}
      {!showForm && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                Project Collection
              </h2>
              <p className="text-sm text-slate-500 font-medium">Total Visibility: {projects.length} live works</p>
            </div>
            <button
              onClick={() => dispatch(fetchProjects())}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/20 transition-all active:rotate-180 duration-500"
            >
              <MdRefresh className="text-xl" />
            </button>
          </div>

          {loading ? (
            <div className="py-24 text-center">
              <div className="inline-block w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="mt-4 font-bold text-slate-500 animate-pulse">Retrieving your work...</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="py-24 text-center bg-slate-50 dark:bg-slate-800/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
              <MdWorkOutline className="text-6xl text-slate-300 dark:text-slate-700 mx-auto mb-4" />
              <p className="text-xl font-bold text-slate-900 dark:text-white mb-2">You haven't added any projects yet.</p>
              <p className="text-slate-500 font-medium mb-8 max-w-sm mx-auto">Start building your digital footprint by creating your first showcase item.</p>
              <button
                onClick={handleAddProject}
                className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold"
              >
                Get Started
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto pb-6">
              <ProjectTable
                projects={projects}
                onEdit={handleEditProject}
                onDelete={handleDeleteProject}
              />
            </div>
          )}
        </div>
      )}

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        title="Dismantle Project?"
        message="Are you sure you want to remove this project from your public showcase? This action will permanently delist it."
        confirmText="Confirm Removal"
      />
    </div>
  );
};

export default ProjectIndex;
