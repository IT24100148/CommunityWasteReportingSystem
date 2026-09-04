import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const submitReport = async (reportData) => {
  const response = await axios.post(
    `${API_BASE_URL}/reports`,
    reportData
  );

  return response.data;
};
