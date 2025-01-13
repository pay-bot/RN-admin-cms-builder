// import Request from "@/utils/axiosUtil";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import _ from "lodash";
import qs from "qs";
import useRequest from "./useRequest";

type TGet = {
  url: string;
  revalidateByUrl?: boolean;
  validate?: Array<number | string> | unknown[];
  token?: string;
  isEnabled?: boolean;
  queryString?: object;
};

interface AxiosError {
  response?: {
    status: number;
    data: { detail: string };
  };
}

export const fetchDetail = async ({ url, queryString, token }: TGet) => {
  try {
    const { Responses } = useRequest();
    const response = await Responses({
      url: `/${url}${qs.stringify(queryString, {
        addQueryPrefix: true,
        skipNulls: true,
        arrayFormat: "repeat",
        // skipEmptyString: true,
      })}`,
      token,
    });

    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    const axiosResp = axiosError as AxiosResponse;

    // Handle or re-throw the axiosError as needed
    throw error; // If you want the axiosError to propagate
  }
};

export default function useGet({
  url,
  validate,
  isEnabled = true,
  revalidateByUrl = false,
  queryString,
  token,
}: TGet) {
  let transValidate = validate;
  if (revalidateByUrl) {
    transValidate = [validate];
  }

  const finalValidate = _.flattenDeep(
    transValidate && transValidate.length > 0
      ? [transValidate, queryString && JSON.stringify(queryString)]
      : [url]
  ).filter((k) => k !== undefined);

  return useQuery({
    queryKey: finalValidate,
    queryFn: () => fetchDetail({ url, queryString, token }),
    enabled: isEnabled,
    refetchOnWindowFocus: false,
  });
}
