import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProjects, getProjectById, createProject, updateProject, deleteProject } from '../../api/project.api';

// Fetch all projects
export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllProjects();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch projects');
    }
  }
);

// Fetch project by ID
export const fetchProjectById = createAsyncThunk(
  'projects/fetchProjectById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getProjectById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch project');
    }
  }
);

// Create new project
export const addProject = createAsyncThunk(
  'projects/addProject',
  async (projectData, { rejectWithValue }) => {
    try {
      const response = await createProject(projectData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create project');
    }
  }
);

// Update project
export const editProject = createAsyncThunk(
  'projects/editProject',
  async ({ id, projectData }, { rejectWithValue }) => {
    try {
      const response = await updateProject(id, projectData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update project');
    }
  }
);

// Delete project
export const removeProject = createAsyncThunk(
  'projects/removeProject',
  async (id, { rejectWithValue }) => {
    try {
      await deleteProject(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete project');
    }
  }
);
