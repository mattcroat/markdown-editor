import { editor } from './lib/milkdown/editor'
import { placeholder } from './content/markdown'
import { getMarkdown } from './utils'

const content = getMarkdown().length > 0 ? getMarkdown() : placeholder

editor(content)
