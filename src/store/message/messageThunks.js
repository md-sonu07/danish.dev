import { createAsyncThunk } from "@reduxjs/toolkit";
import * as messageApi from "../../api/message.api";

export const sendMessage = createAsyncThunk(
    "message/sendMessage",
    async (messageData, { rejectWithValue }) => {
        try {
            return await messageApi.sendMessageApi(messageData);
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: error.message });
        }
    }
);

export const getAllMessages = createAsyncThunk(
    "message/getAllMessages",
    async (_, { rejectWithValue }) => {
        try {
            return await messageApi.getAllMessagesApi();
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: error.message });
        }
    }
);

export const deleteMessage = createAsyncThunk(
    "message/deleteMessage",
    async (id, { rejectWithValue }) => {
        try {
            await messageApi.deleteMessageApi(id);
            return id;
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: error.message });
        }
    }
);

export const markAsRead = createAsyncThunk(
    "message/markAsRead",
    async (id, { rejectWithValue }) => {
        try {
            return await messageApi.markAsReadApi(id);
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: error.message });
        }
    }
);
