import { randomEl, int } from './index'

const luhnGen = ((() => {
  const d = [0, 1, 2, 3, 4, -4, -3, -2, -1, 0]
  return (l, s, i, m) => {
    s = 0
    for (i = 0; i < l.length; i++) { s += parseInt(l.substring(i, i + 1), 10) }
    for (i = l.length - 1; i >= 0; i -= 2) { s += d[parseInt(l.substring(i, i + 1), 10)] }
    m = 10 - (s % 10)
    return (m === 10) ? 0 : m
  }
}))()

export default (issuer = 'visa', len = 16) => {
  let out

  if (issuer !== 'visa') {
    len = 16
  }

  switch (issuer) {
    case 'visa':
      if (len !== 16 && len !== 13) {
        len = 16
      }
      out = 4
      break
    case 'mastercard':
      out = randomEl([51, 52, 53, 54, 55])
      break
    case 'amex':
      out = randomEl([34, 37])
      break
    case 'discover':
      out = randomEl([6011, 622126 + int(799), 644 + int(5), 65])
      break
    case 'diners':
      out = randomEl([54, 55])
      break
  }

  out = out.toString().split('')
  while (out.length < (len - 1)) {
    out.push(int().toString())
  }

  out.push(luhnGen(out.join('')))
  return out.join('')
}
