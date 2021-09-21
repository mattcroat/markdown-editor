export function getColor(color: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(color)
    .trim()
}

export function getMarkdown(): string {
  return localStorage.getItem('content') ?? ''
}

export function saveMarkdown(content: string): void {
  // don't save if you accidentaly delete everything
  if (content.length < 1) return
  localStorage.setItem('content', content)
}
