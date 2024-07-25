import { CustomError } from "./customError";

export interface FetchReturn<T> {
  data: T | undefined;
  loading: boolean;
  statusCode: number;
  error: CustomError | null;
}
