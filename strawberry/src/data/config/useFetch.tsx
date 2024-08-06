import { buildURL } from "./url";
import { RequestConfig } from "./request";
import { CustomError } from "./customError";
import { logRequest, logResponse } from "./logging";

async function handleError(response: Response): Promise<never> {
  if (response.status === 401) {
    throw new CustomError("TOKEN_ERROR");
  } else if (response.status >= 500) {
    throw new CustomError("NETWORK_ERROR");
  }
  throw new CustomError("UNKNOWN_ERROR");
}

interface BaseResponse<T> {
  state: number;
  message: string;
  data: T;
}

export function useFetch<T>({
  url,
  method,
  params,
  queryParams,
  body,
}: RequestConfig<T>): () => Promise<T> {
  return async () => {
    const Server_IP = `${import.meta.env.VITE_APP_Server_IP}/api/v1/`;
    const finalURL = Server_IP + buildURL(url, params, queryParams);

    const finalHeader = { "Content-Type": "application/json" };
    const finalBody = body ? JSON.stringify(body) : undefined;

    let requestConfig: RequestInit = {
      method,
      headers: finalHeader,
      body: finalBody,
    };

    requestConfig = logRequest(requestConfig);

    let response = await fetch(finalURL, requestConfig);
    response = await logResponse(response);

    if (!response.ok) {
      await handleError(response);
    }

    const text = await response.text();
    try {
      const result: BaseResponse<T> = JSON.parse(text);
      return result.data;
    } catch {
      throw new CustomError("PARSE_ERROR");
    }
  };
}
