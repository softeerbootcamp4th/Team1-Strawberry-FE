export function checkOnlyBlank(content: string) {
  if (!content.trim().length) {
    return true;
  }
  return false;
}
