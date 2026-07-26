import { createSlice } from "@reduxjs/toolkit";
import { sendMessage, getAllMessages, deleteMessage, markAsRead } from "./messageThunks";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        messages: [],
        loading: false,
        error: null,
        success: false
    },
    reducers: {
        resetStatus: (state) => {
            state.success = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Send Message
            .addCase(sendMessage.pending, (state) => {
                state.loading = true;
            })
            .addCase(sendMessage.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || "Failed to send message";
            })
            // Get All Messages
            .addCase(getAllMessages.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllMessages.fulfilled, (state, action) => {
                state.loading = false;
                state.messages = action.payload.data || [];
            })
            .addCase(getAllMessages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || "Failed to fetch messages";
            })
            // Delete Message
            .addCase(deleteMessage.fulfilled, (state, action) => {
                state.messages = state.messages.filter(msg => msg._id !== action.payload);
            })
            // Mark as Read
            .addCase(markAsRead.fulfilled, (state, action) => {
                const updatedMsg = action.payload.data;
                const index = state.messages.findIndex(msg => msg._id === updatedMsg._id);
                if (index !== -1) {
                    state.messages[index] = updatedMsg;
                }
            });
    }
});

export const { resetStatus } = messageSlice.actions;
export default messageSlice.reducer;
