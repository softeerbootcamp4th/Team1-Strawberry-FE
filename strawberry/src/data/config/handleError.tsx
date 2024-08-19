import { CustomError } from "./customError";
import BaseError from "./BaseError";

async function handleError(response: Response): Promise<never> {
  const result: BaseError = await response.json();
  throw new CustomError(response.status, result.isCustom, result.message);
}

export default handleError;
