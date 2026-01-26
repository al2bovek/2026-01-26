import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000"
});

export const getItems = () => api.get("/tasks");
export const getItem = (id) => api.get(`/tasks/${id}`);
export const addItem = (data) => api.post("/tasks", data);
export const updateItem = (id, data) => api.put(`/tasks/${id}`, data);
export const deleteItem = (id) => api.delete(`/tasks/${id}`);

