import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
api.interceptors.request.use(
  (req) => req,
  (error) => Promise.reject(error),
);
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      const { data, status } = error.response;
      if (data.message === "User already exists" && status === 400) {
        return Promise.reject(data);
      }
    }
    return Promise.reject(error);
  },
);
export default api;
