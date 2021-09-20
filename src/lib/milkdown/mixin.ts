import { css } from '@emotion/css'

import type { ThemePack } from '@milkdown/design-system'

type Mixin = ThemePack['mixin']

export const mixin: Mixin = ({ palette }) => ({
  shadow: () => css`
    box-shadow: 6px 6px 0px ${palette('shadow', 1)};
  `,
  border: () => css`
    border-style: solid;
    border-width: 1px;
    border-color: ${palette('line')};
  `,
})
