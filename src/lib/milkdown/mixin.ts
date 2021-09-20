import { css } from '@emotion/css'

import type { ThemePack } from '@milkdown/design-system'

type Mixin = ThemePack['mixin']

export const mixin: Mixin = ({ palette }) => ({
  shadow: () => css`
    box-shadow: 0px 2px 2px ${palette('shadow', 0.2)};
  `,
  border: () => css`
    border-style: solid;
    border-width: 1px;
    border-color: ${palette('line')};
  `,
})
