import { createSlice } from '@reduxjs/toolkit';
import { fetchProfile, updateProfile } from './profileThunks';

const initialState = {
    data: {
        email: '',
        phone: '',
        location: '',
        github: '',
        linkedin: '',
        instagram: ''
    },
    loading: false,
    error: null,
    success: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        clearSuccess: (state) => {
            state.success = null;
        },
    },
    extraReducers: (builder) => {
        // Fetch Profile
        builder.addCase(fetchProfile.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // Update Profile
        builder.addCase(updateProfile.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        });
        builder.addCase(updateProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.success = 'Profile updated successfully!';
        });
        builder.addCase(updateProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { clearError, clearSuccess } = profileSlice.actions;

export default profileSlice.reducer;
