import { commonmark } from '@milkdown/preset-commonmark'
import { Editor, rootCtx } from '@milkdown/core'
import { nord } from '@milkdown/theme-nord'

import { emoji } from '@milkdown/plugin-emoji'
import { listener, listenerCtx } from '@milkdown/plugin-listener'
import { slash } from '@milkdown/plugin-slash'

Editor.make()
  .config((ctx) => {
    ctx.set(rootCtx, document.querySelector('#editor'))
    ctx.set(listenerCtx, {
      markdown: [
        (getMarkdown) => {
          // ...
        },
      ],
    })
  })
  .use(nord)
  .use(commonmark)
  .use(emoji)
  .use(listener)
  .use(slash)
  .create()
