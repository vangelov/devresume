export function formatDate(stringOrNumber: string | number): string | null {
  const dateString = stringOrNumber.toString();
  const parts = dateString.split("-");
  const partsCount = parts.length;
  if (partsCount === 0) return null;

  const year = parts[0];
  if (partsCount === 1) return year;

  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" });
  return `${month} ${year}`;
}
