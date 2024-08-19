/* eslint-disable @typescript-eslint/no-explicit-any */
import buildURL from "./buildURL";
import makeHeader from "./makeHeader";
import handleError from "./handleError";

import RequestConfig from "./RequestConfig";
import BaseResponse from "./BaseResponse";

import { logRequest, logResponse } from "./logging";

interface BodyType {
  body?: object;
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
