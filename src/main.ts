import marked from './lib/marked'
import { debounce } from './utils'

const markdownElement = document.querySelector<HTMLTextAreaElement>(
  '[data-markdown]'
)!

function updateMarkdown(event: KeyboardEvent) {
  const markdown = (event.target as HTMLPreElement).innerHTML
  const parsedMarkdown = marked(markdown)
  markdownElement.innerHTML = parsedMarkdown
}

markdownElement.addEventListener('keyup', debounce(updateMarkdown, 1000))
