import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import Cookies from 'js-cookie';
// import { useAppSelector } from "@/app";
import { clientStorage } from "@/state/clientPersister";

const client = axios.create({ baseURL: process.env.EXPO_PUBLIC_API_URL });

interface RequestOptions extends AxiosRequestConfig {
  token?: string;
}

const useRequest = () => {
  // const getKey = useAppSelector((state) => state.auth.key);

  const Responses = async (options: RequestOptions): Promise<AxiosResponse> => {
    // const token = Cookies.get('bzKey');
    client.defaults.headers.common.Authorization = `Token ${
      options.token || clientStorage.getItem("key")
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
