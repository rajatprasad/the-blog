import axios from "axios";

export const axiosInstance = axios.create({
  baseUrl: "https://dev-theblog.herokuapp.com/api",
});
