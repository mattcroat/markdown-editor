import marked from 'marked'

marked.options({
  headerIds: false,
  smartypants: true,
})

export { marked as default }
