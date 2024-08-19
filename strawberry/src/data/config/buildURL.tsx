/* eslint-disable @typescript-eslint/no-explicit-any */

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

export default buildURL;
