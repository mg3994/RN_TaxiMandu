import axios from "../utils/network/axios";
import { setToken } from "./TokenService"; //getToken,
import { endpoints } from '../utils/network/endpointmethods';

export async function login(credentials:TUserLogin) {
  //try catch remains
  const { data } = await axios.post(
    endpoints.post("/login").path,
    credentials
    // { //Already set in axios file
    //   headers: {
    //     Accept: "application/json",
    //   },
    // }
  );
  await setToken(data.token);
}

export async function register(registerInfo:TUserRegister) {
  const { data } = await axios.post(endpoints.post("/register").path, registerInfo);
  await setToken(data.token);
}

export async function sendPasswordResetLink(email:TEmail) {
  const { data } = await axios.post(endpoints.post("/forgot-password").path, { email });
  return data.status;
}

export async function loadUser() :Promise<TUser>{
  //credentials
 
  const { data: user } = await axios.get(
    endpoints.get("/user").path // {
    //   headers: {
    //     // Accept: "application/json",  // already set in axios file
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
  );
  return user;
}

export async function logout() {
  // const token = await getToken();
  await axios.post(
    endpoints.post("/logout").path,
    {}
    // { //already set in axios file as interseptor as if token is not nullm then add bearer token in Header
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
  );
  await setToken(null); // make that null
}

// async function handleLogin(params) {
//   setErrors({}); //reset Errors
//   try {
//   } catch (e) {
//     if (e.response?.status === 422) {
//       setErrors(e.response.data.errors);
//     }
//   }
//   // console.log(email, password);
// }