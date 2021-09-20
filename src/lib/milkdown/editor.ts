import { commonmark, codeFence } from '@milkdown/preset-commonmark'
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core'

import { emoji } from '@milkdown/plugin-emoji'
import { listener, listenerCtx } from '@milkdown/plugin-listener'
import { slash } from '@milkdown/plugin-slash'
import { prism } from '@milkdown/plugin-prism'
import { tooltip } from '@milkdown/plugin-tooltip'

import { nightHowl } from './theme'

export function editor(markdown: string): void {
  Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, document.querySelector('#editor'))
      ctx.set(defaultValueCtx, markdown)
      // ctx.set(listenerCtx, {
      //   markdown: [
      //     (getMarkdown) => {
      //       console.log(getMarkdown())
      //     },
      //   ],
      // })
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
    .use(prism)
    .use(emoji)
    .create()
}
