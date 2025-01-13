import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import Cookies from 'js-cookie';
// import { useAppSelector } from "@/app";
import { Storage } from "../state/cache";

console.log("API URL:", process.env.EXPO_PUBLIC_API_URL);

const client = axios.create({ baseURL: process.env.EXPO_PUBLIC_API_URL });

interface RequestOptions extends AxiosRequestConfig {
  token?: string;
}

const useRequest = () => {
  // const getKey = useAppSelector((state) => state.auth.key);

  const Responses = async (options: RequestOptions): Promise<AxiosResponse> => {
    // const token = Cookies.get('bzKey');
    client.defaults.headers.common.Authorization = `Token ${
      options.token || Storage.getString("app.token")
    }`;
    // client.defaults.headers.common.Authorization = `Token ${token || options.token || getKey}`;

    // Set responseType to 'blob' if specified in options
    const responseType = options.responseType || "json";

    // Create a new Responses config with responseType
    const config: AxiosRequestConfig = { ...options, responseType };

    try {
      return await client(config); // Directly return the AxiosResponse
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw error; // Rethrow or handle as needed
        } else {
          throw error; // Rethrow the error for non-response related errors
        }
      } else {
        throw error; // Handle non-Axios errors
      }
    }
  };

  return { Responses };
};

export default useRequest;
