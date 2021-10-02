import { getMarkdown } from '../utils'

function saveToClipboard() {
  const markdown = getMarkdown()
  navigator.clipboard.writeText(markdown)
}

function clearStorage() {
  const clear = confirm('Are you sure you want to clear everything?')

  if (clear) {
    localStorage.removeItem('content')
    location.reload()
  }
}

const clipboardElement = document.querySelector<HTMLButtonElement>('[copy]')!
clipboardElement.addEventListener('click', saveToClipboard)

const clearStorageElement = document.querySelector<HTMLButtonElement>(
  '[clear]'
)!
clearStorageElement.addEventListener('click', clearStorage)
