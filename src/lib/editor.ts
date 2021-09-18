import { commonmark, codeFence } from '@milkdown/preset-commonmark'
import { defaultValueCtx, Editor, rootCtx, themeFactory } from '@milkdown/core'

import { emoji } from '@milkdown/plugin-emoji'
import { listener, listenerCtx } from '@milkdown/plugin-listener'
import { slash } from '@milkdown/plugin-slash'

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
    .use(themeFactory({}))
    .use(
      commonmark.configure(codeFence, {
        headless: false,
        languageList: ['css', 'html', 'js'],
      })
    )
    .use(emoji)
    .use(listener)
    .use(slash)
    .create()
}
