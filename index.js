const stem = 'https://www.youtube.com/watch?'

export default argument => {
  const url = new URL(argument)
  const { hostname, pathname, searchParams } = url
  if (hostname === 'youtu.be') {
    const match = /^\/([a-zA-Z0-9\-_]+)$/.exec(pathname)
    if (match) {
      const newParams = new URLSearchParams()
      newParams.set('v', match[1])
      const t = searchParams.get('t')
      if (t) newParams.set('t', t)
      return stem + newParams.toString()
    }
    return argument
  } else if (
    hostname === 'm.youtube.com' ||
    hostname === 'www.youtube.com' ||
    hostname === 'youtube-nocookie.com' ||
    hostname === 'youtube.com'
  ) {
    let v
    if (pathname === '/watch') {
      v = searchParams.get('v')
    } else if (pathname.startsWith('/shorts/')) {
      const match = /^\/shorts\/([a-zA-Z0-9\-_]+)$/.exec(pathname)
      if (match) {
        v = match[1]
      } else {
        return argument
      }
    }
    if (!v) return argument
    const newParams = new URLSearchParams()
    newParams.set('v', v)
    const t = searchParams.get('t')
    if (t) newParams.set('t', t)
    return stem + newParams.toString()
  }
  return argument
}
