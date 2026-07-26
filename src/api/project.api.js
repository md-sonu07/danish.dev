import axiosInstance from "./axiosInstance";

// Get all projects
export const getAllProjects = async () => {
  const res = await axiosInstance.get("/projects");
  return res.data;
};

// Get project by ID
export const getProjectById = async (id) => {
  const res = await axiosInstance.get(`/projects/${id}`);
  return res.data;
};

// Create new project
export const createProject = async (projectData) => {
  const res = await axiosInstance.post("/projects", projectData);
  return res.data;
};

// Update project
export const updateProject = async (id, projectData) => {
  const res = await axiosInstance.put(`/projects/${id}`, projectData);
  return res.data;
};

// Delete project (soft delete)
export const deleteProject = async (id) => {
  const res = await axiosInstance.delete(`/projects/${id}`);
  return res.data;
};

// Hard delete project
export const hardDeleteProject = async (id) => {
  const res = await axiosInstance.delete(`/projects/${id}/hard`);
  return res.data;
};
