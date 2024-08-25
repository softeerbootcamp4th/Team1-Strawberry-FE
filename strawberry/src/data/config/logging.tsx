export function logRequest(config: RequestInit): RequestInit {
  // console.log("Request:", config);
  return config;
}

export async function logResponse(response: Response): Promise<Response> {
  // console.log("Response:", response);
  const clonedResponse = response.clone();
  const responseBody = await clonedResponse.text();
  // console.log("Response Body:", responseBody);
  return response;
}
