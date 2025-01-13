import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URL;
const axiosInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

type TSignIn = {
  email: string;
  password: string;
};

function auth() {
  async function signin(data: TSignIn) {
    const method = "post";
    const url = `${baseURL}admin-login/`;
    const response = await axiosInstance({
      method,
      url,
      data,
    });
    return response;
  }

  async function signout(token?: string) {
    const headers = {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      `${baseURL}admin-logout/`,
      { token },
      { headers }
    );
    return response;
  }

  return {
    signin,
    signout,
  };
}

export default auth;
