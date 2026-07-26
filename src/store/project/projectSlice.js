import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProjects,
  fetchProjectById,
  addProject,
  editProject,
  removeProject
} from './projectThunks';

// Helper function to transform project data - optimized
const transformProject = (project) => {
  if (!project) return null;
  
  return {
    id: project._id || project.id,
    languages: project.languages || [],
    title: project.title || '',
    projectImage: project.projectImage || '',
    description: project.description || '',
    demoLink: [project.demoLink?.text || "Live Demo", project.demoLink?.url || ''],
    githubLink: [project.githubLink?.text || "Code", project.githubLink?.url || '']
  };
};

const initialState = {
  projects: [],
  currentProject: null,
  loading: false,
  error: null,
  success: null
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = null;
    },
    clearCurrentProject: (state) => {
      state.currentProject = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch all projects
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          state.projects = action.payload.data.map(transformProject);
        }
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch project by ID
      .addCase(fetchProjectById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectById.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          state.currentProject = transformProject(action.payload.data);
        }
      })
      .addCase(fetchProjectById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Add project
      .addCase(addProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          state.projects.push(transformProject(action.payload.data));
          state.success = 'Project created successfully';
        }
      })
      .addCase(addProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Edit project
      .addCase(editProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editProject.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          const updatedProject = transformProject(action.payload.data);
          const index = state.projects.findIndex(p => p.id === updatedProject.id);
          if (index !== -1) {
            state.projects[index] = updatedProject;
          }
          state.success = 'Project updated successfully';
        }
      })
      .addCase(editProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Remove project
      .addCase(removeProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = state.projects.filter(project => project.id !== action.payload);
        state.success = 'Project deleted successfully';
      })
      .addCase(removeProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearError, clearSuccess, clearCurrentProject } = projectSlice.actions;
export default projectSlice.reducer;
