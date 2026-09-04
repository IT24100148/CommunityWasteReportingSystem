import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const getDashboardStats = async () => {
  const response = await axios.get(`${API_BASE_URL}/dashboard/stats`);
  return response.data;
};

export const getRecentReports = async () => {
  const response = await axios.get(`${API_BASE_URL}/dashboard/recent`);
  return response.data;
};