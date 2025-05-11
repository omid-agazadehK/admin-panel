import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
api.interceptors.request.use(
  (req) => {
    const token = Cookies.get("accessToken");
    if (token) {
      req.headers["Authorization"] = `Bearer ${token}`;
    }
    return req;
  },
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
