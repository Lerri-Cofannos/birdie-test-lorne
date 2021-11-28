export function dispDate(timestampToClean: string): string {
  const date = new Date(timestampToClean);
  return date.toLocaleDateString();
}

export function dispTime(timestampToClean: string): string {
  const date = new Date(timestampToClean);
  return date.toLocaleTimeString();
}
