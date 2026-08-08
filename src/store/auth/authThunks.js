import { createAsyncThunk } from '@reduxjs/toolkit';

// Login thunk
export const login = createAsyncThunk(
  'auth/login',
  async (password, { rejectWithValue }) => {
    try {
      const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'; // Change this to your preferred password or use environment variable
      
      if (password === ADMIN_PASSWORD) {
        localStorage.setItem('isAdminAuthenticated', 'true');
        return { success: true };
      } else {
        return rejectWithValue('Invalid password');
      }
    } catch {
      return rejectWithValue('Login failed. Please try again.');
    }
  }
);

// Logout thunk
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem('isAdminAuthenticated');
      return { success: true };
    } catch {
      return rejectWithValue('Logout failed');
    }
  }
);

// Check authentication status thunk
export const checkAuthStatus = createAsyncThunk(
  'auth/checkAuthStatus',
  async (_, { rejectWithValue }) => {
    try {
      const authStatus = localStorage.getItem('isAdminAuthenticated');
      return { isAuthenticated: authStatus === 'true' };
    } catch {
      return rejectWithValue('Failed to check authentication status');
    }
  }
);
