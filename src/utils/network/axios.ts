import axiosLib from "axios";
import { getToken } from "../../services/TokenService";
import { endpoints } from "./endpointmethods";

const axios = axiosLib.create({
  baseURL: endpoints.baseURL,
  headers:   {
    Accept: "application/json", //readonly
  },
});
axios.interceptors.request.use(async (req) => {
  const token = await getToken();
  if (token !== null) {
    req.headers["Authorization"] = `Bearer ${token}`; //Backend Is In Laravel
  }
  return req;
});

export default axios;