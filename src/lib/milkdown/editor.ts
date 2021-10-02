import { commonmark, codeFence } from '@milkdown/preset-commonmark'
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core'

import { emoji } from '@milkdown/plugin-emoji'
import { history } from '@milkdown/plugin-history'
import { listener, listenerCtx } from '@milkdown/plugin-listener'
import { prism } from '@milkdown/plugin-prism'
import { slash } from '@milkdown/plugin-slash'
import { tooltip } from '@milkdown/plugin-tooltip'

import { nightHowl } from './theme'
import { saveMarkdown } from '../../utils'

export function editor(placeholder: string): void {
  Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, document.querySelector<HTMLDivElement>('[editor]'))
      ctx.set(defaultValueCtx, placeholder)
      ctx.set(listenerCtx, {
        markdown: [
          (getMarkdown) => {
            const markdown = getMarkdown()
            saveMarkdown(markdown)
          },
        ],
      })
    })
    .use(nightHowl)
    .use(
      commonmark.headless().configure(codeFence, {
        headless: false,
        languageList: ['css', 'html', 'js', 'json', 'shell', 'ts'],
      })
    )
    .use(listener)
    .use(slash)
    .use(tooltip)
    .use(history)
    .use(prism)
    .use(emoji)
    .create()
}
