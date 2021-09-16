export function debounce(callback, wait) {
  let timeout

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      callback(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
