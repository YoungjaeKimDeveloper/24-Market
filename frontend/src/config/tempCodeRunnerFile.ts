import axios from "axios";

const host = import.meta.env.VITE_LOCAL_HOST;

console.log(host);

const axiosInstance = axios.create({
  baseURL: `http://${import.meta.env.OCAL_HOST}/api/products/`,
});

export default axiosInstance;
