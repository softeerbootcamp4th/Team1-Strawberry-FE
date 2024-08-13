/* eslint-disable @typescript-eslint/no-explicit-any */

import { logRequest, logResponse } from "./logging";

interface RequestConfig {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  params?: Record<string, any>;
  queryParams?: Record<string, any>;
}

interface BaseResponse<T> {
  state: number;
  message: string;
  data: T;
}

interface BodyType {
  body?: object;
}

function buildURL(
  url: string,
  params?: Record<string, any>,
  queryParams?: Record<string, any>,
): string {
  const Server_IP = `${import.meta.env.VITE_APP_Server_IP}/api/v1/`;
  let finalURL = Server_IP + url;

  if (params) {
    Object.keys(params).forEach((key) => {
      finalURL = finalURL.replace(`:${key}`, encodeURIComponent(params[key]));
    });
  }

  if (queryParams) {
    const queryString = new URLSearchParams(queryParams).toString();
    finalURL += `?${queryString}`;
  }

  return finalURL;
}

async function handleError(response: Response): Promise<never> {
  if (response.status === 401) {
    throw new Error("TOKEN_ERROR");
  } else if (response.status >= 500) {
    throw new Error("NETWORK_ERROR");
  }
  throw new Error("UNKNOWN_ERROR");
}

function makeHeader(): HeadersInit {
  const baseHeader: HeadersInit = { "Content-Type": "application/json" };

  const token = localStorage.getItem("accessToken");

  if (token) {
    return {
      ...baseHeader,
      Authorization: `Bearer ${token}`,
    };
  } else {
    return baseHeader;
  }
}

async function fetchRequest<T>({
  url,
  method,
  params,
  queryParams,
  body,
}: RequestConfig & BodyType): Promise<T> {
  const finalURL = buildURL(url, params, queryParams);
  const finalHeader = makeHeader();
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
    throw new Error("PARSE_ERROR");
  }
}

// HTTP method functions

export function get<T>(
  url: string,
  options?: { params?: Record<string, any>; queryParams?: Record<string, any> },
): Promise<T> {
  const { params, queryParams } = options || {};
  return fetchRequest<T>({ url, method: "GET", params, queryParams });
}

export function post<T>(
  url: string,
  data?: object,
  params?: Record<string, any>,
  queryParams?: Record<string, any>,
): Promise<T> {
  return fetchRequest<T>({
    url,
    method: "POST",
    params,
    queryParams,
    body: data,
  });
}

export function put<T>(
  url: string,
  data?: object,
  params?: Record<string, any>,
  queryParams?: Record<string, any>,
): Promise<T> {
  return fetchRequest<T>({
    url,
    method: "PUT",
    params,
    queryParams,
    body: data,
  });
}

export function del<T>(
  url: string,
  params?: Record<string, any>,
  queryParams?: Record<string, any>,
): Promise<T> {
  return fetchRequest<T>({
    url,
    method: "DELETE",
    params,
    queryParams,
  });
}

const network = {
  get,
  post,
  put,
  delete: del,
};

export default network;
