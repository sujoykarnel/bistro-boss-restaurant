import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  axiosSecure.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      const token = localStorage.getItem("access-token");
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (err) => {
      // Do something with request error
      return Promise.reject(err);
    }
  );

  // interceptors 401 and 403 status
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      const status = err.response.status;
      console.log(status);
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
        console.log("hello");
      }

      return Promise.reject(err);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
