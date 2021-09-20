import { themeFactory } from '@milkdown/core'

import { font } from './font'
import { color } from './color'
import { size } from './size'
import { slots } from './slots'
import { mixin } from './mixin'

export const nightHowl = themeFactory({
  font,
  color,
  size,
  slots,
  mixin,
})
