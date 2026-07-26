import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './project/projectSlice';
import authReducer from './auth/authSlice';
import messageReducer from './message/messageSlice';
import profileReducer from './profile/profileSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    auth: authReducer,
    message: messageReducer,
    profile: profileReducer,
  },
});

export default store;
