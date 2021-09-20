export function getColor(color: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(color)
    .trim()
}
