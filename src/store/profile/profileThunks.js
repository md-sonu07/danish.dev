import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = "http://localhost:5000/api/profile";

export const fetchProfile = createAsyncThunk(
    'profile/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(API_URL, {
                withCredentials: true
            });
            return response.data.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || 'Failed to fetch profile data'
            );
        }
    }
);

export const updateProfile = createAsyncThunk(
    'profile/update',
    async (profileData, { rejectWithValue }) => {
        try {
            const response = await axios.put(API_URL, profileData, {
                withCredentials: true
            });
            return response.data.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || 'Failed to update profile data'
            );
        }
    }
);
