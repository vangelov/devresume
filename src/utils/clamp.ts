export function clamp(min: number, max: number, value: number) {
  return Math.min(Math.max(min, value), max);
}
