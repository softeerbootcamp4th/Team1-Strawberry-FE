/* eslint-disable @typescript-eslint/no-explicit-any */

interface RequestConfig {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  params?: Record<string, any>;
  queryParams?: Record<string, any>;
}

export default RequestConfig;
