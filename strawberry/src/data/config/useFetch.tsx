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

export function useFetch<T>({
  url,
  method,
  params,
  queryParams,
  body,
}: RequestConfig<T>): () => Promise<T> {
  return async () => {
    const finalURL = buildURL(url, params, queryParams);
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
      return JSON.parse(text) as T;
    } catch {
      throw new CustomError("PARSE_ERROR");
    }
  };
}
