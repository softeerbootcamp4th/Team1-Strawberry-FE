import { CustomError } from "./customError";

let hasAlerted = false;

export function handleQueryError(error: unknown) {
  if (!hasAlerted) {
    alert((error as CustomError).message);
    hasAlerted = true;
  }
  console.error("Query Error:", error);
}
