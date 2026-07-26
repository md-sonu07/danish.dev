import axiosInstance from "./axiosInstance";

export const sendMessageApi = async (messageData) => {
    const response = await axiosInstance.post("/messages/send", messageData);
    return response.data;
};

export const getAllMessagesApi = async () => {
    const response = await axiosInstance.get("/messages");
    return response.data;
};

export const deleteMessageApi = async (id) => {
    const response = await axiosInstance.delete(`/messages/${id}`);
    return response.data;
};

export const markAsReadApi = async (id) => {
    const response = await axiosInstance.patch(`/messages/${id}/read`);
    return response.data;
};
