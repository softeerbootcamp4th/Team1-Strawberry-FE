export function handleQueryError(error: unknown) {
  let errorMessage: string = "";

  if (error instanceof Error) {
    errorMessage = error.message;
  }

  alert(errorMessage);
}
