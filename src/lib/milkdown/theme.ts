import { injectGlobal, css } from '@emotion/css'
import { themeFactory } from '@milkdown/core'
import { Icon } from '@milkdown/design-system'

const NightHowl = {
  blue: '#0e1e2a',
  dark: '#000000',
  darkblue: '#112636',
  lightblue: '#9bc1d4',
  white: '#e0f1ff',
  line: '#1c3c54',
}

const iconMapping: Record<Icon, string> = {
  h1: 'looks_one',
  h2: 'looks_two',
  h3: 'looks_3',
  loading: 'hourglass_empty',
  quote: 'format_quote',
  code: 'code',
  table: 'table_chart',
  divider: 'horizontal_rule',
  image: 'image',
  brokenImage: 'broken_image',
  bulletList: 'format_list_bulleted',
  orderedList: 'format_list_numbered',
  taskList: 'checklist',
  bold: 'format_bold',
  italic: 'format_italic',
  inlineCode: 'code',
  strikeThrough: 'strikethrough_s',
  link: 'link',
  leftArrow: 'chevron_left',
  rightArrow: 'chevron_right',
  upArrow: 'expand_less',
  downArrow: 'expand_more',
  alignLeft: 'format_align_left',
  alignRight: 'format_align_right',
  alignCenter: 'format_align_center',
  delete: 'delete',
  select: 'select_all',
  unchecked: 'check_box_outline_blank',
  checked: 'check_box',
}

export const nightHowl = themeFactory({
  font: {
    typography: ['Inter', 'sans-serif'],
    code: ['Mononoki Nerd Font', 'monospace'],
  },
  color: {
    shadow: NightHowl.dark,
    primary: NightHowl.white,
    secondary: NightHowl.darkblue,
    neutral: NightHowl.lightblue,
    solid: NightHowl.lightblue,
    line: NightHowl.line,
    background: NightHowl.darkblue,
    surface: NightHowl.blue,
  },
  size: {
    radius: '2px',
    lineWidth: '1px',
  },
  slots: () => ({
    icon: (id) => {
      console.log(id)
      const span = document.createElement('span')
      span.className = 'icon material-icons material-icons-outlined'
      span.textContent = iconMapping[id]
      return span
    },
  }),
  mixin: ({ palette }) => ({
    shadow: () => css`
      box-shadow: 0px 2px 2px ${palette('shadow', 0.2)};
    `,
    border: () => css`
      border-style: solid;
      border-width: 1px;
      border-color: ${palette('line')};
    `,
  }),
  global: ({ palette, font, mixin, size }) => {
    const css = injectGlobal
    return css`
      .ProseMirror {
        position: relative;
      }

      .ProseMirror {
        word-wrap: break-word;
        white-space: pre-wrap;
        white-space: break-spaces;
        -webkit-font-variant-ligatures: none;
        font-variant-ligatures: none;
        /* the above doesn't seem to work in edge */
        font-feature-settings: 'liga' 0;
      }

      .ProseMirror pre {
        white-space: pre-wrap;
      }

      .ProseMirror li {
        position: relative;
      }

      .ProseMirror-hideselection *::selection {
        background: transparent;
      }

      .ProseMirror-hideselection *::-moz-selection {
        background: transparent;
      }

      .ProseMirror-hideselection {
        caret-color: transparent;
      }

      .ProseMirror-selectednode {
        outline: 2px solid #8cf;
      }

      /* make sure li selections wrap around markers */
      li.ProseMirror-selectednode {
        outline: none;
      }

      li.ProseMirror-selectednode:after {
        content: '';
        position: absolute;
        left: -32px;
        right: -2px;
        top: -2px;
        bottom: -2px;
        border: 2px solid #8cf;
        pointer-events: none;
      }

      .milkdown {
        position: relative;
        max-width: 80ch;
        margin: 0 auto;
        font-family: ${font.typography};
        color: ${palette('neutral')};
        background: ${palette('surface')};

        .editor {
          outline: none;
        }

        .ProseMirror-selectednode {
          outline: ${size.lineWidth} solid ${palette('line')};
        }

        li.ProseMirror-selectednode {
          outline: none;
        }

        li.ProseMirror-selectednode::after {
          ${mixin.border()}
        }

        @media only screen and (min-width: 72rem) {
          max-width: 57.375rem;
          padding: 3.125rem 7.25rem;
        }

        & ::selection {
          background: ${palette('secondary', 0.38)};
        }
      }
    `
  },
})
