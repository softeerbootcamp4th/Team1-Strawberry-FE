export function buildURL(
  url: string,
  params?: Record<string, string>,
  queryParams?: Record<string, string>,
): string {
  let finalURL = url;

  if (params) {
    Object.keys(params).forEach((key) => {
      finalURL += "/" + params[key];
    });
  }

  if (queryParams) {
    const queryString = new URLSearchParams(queryParams).toString();
    finalURL += `?${queryString}`;
  }

  return finalURL;
}
