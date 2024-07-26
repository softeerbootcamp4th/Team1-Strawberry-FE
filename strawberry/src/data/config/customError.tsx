export const ErrorMessages = {
  NETWORK_ERROR:
    "Network error occurred. Please check your internet connection.",
  TOKEN_ERROR: "Authentication error. Please log in again.",
  UNKNOWN_ERROR: "An unknown error occurred. Please try again later.",
  PARSE_ERROR: "Failed to parse the server response. Please contact support.",
} as const;

export type ErrorType = keyof typeof ErrorMessages;

export class CustomError extends Error {
  constructor(public type: ErrorType) {
    super(ErrorMessages[type]);
    this.name = "BaseError";
  }
}
