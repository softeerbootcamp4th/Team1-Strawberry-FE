export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface RequestConfig<T> {
  url: string;
  method: RequestMethod;
  params?: Record<string, string>;
  queryParams?: Record<string, string>;
  body?: T;
}
