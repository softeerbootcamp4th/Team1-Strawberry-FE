type ErrorType =
  | "BAD_REQUEST"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "INTERNAL_SERVER_ERROR";

const ErrorStatus: { [key: number]: ErrorType } = {
  400: "BAD_REQUEST",
  401: "UNAUTHORIZED",
  403: "FORBIDDEN",
  404: "NOT_FOUND",
  500: "INTERNAL_SERVER_ERROR",
};

export const ErrorMessages: { [K in ErrorType]: string } = {
  INTERNAL_SERVER_ERROR: "An unknown error occurred. Please try again later.",
  BAD_REQUEST: "Bad request. Please check the input and try again.",
  UNAUTHORIZED: "You are not authorized. Please log in.",
  FORBIDDEN: "Access forbidden. You don't have permission.",
  NOT_FOUND: "The requested resource was not found.",
} as const;

const getMessageWithStatus = (status: number): string => {
  const errorType = ErrorStatus[status];
  return ErrorMessages[errorType] || "An unexpected error occurred.";
};

export class CustomError extends Error {
  public status?: number;
  public type?: ErrorType;

  constructor(status: number, isCustom: boolean, message?: string) {
    const finalMessage = isCustom ? message : getMessageWithStatus(status);
    super(finalMessage);

    this.name = "CustomError";
    this.status = status;

    this.type = ErrorStatus[status];
  }
}
