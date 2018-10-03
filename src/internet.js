import { int, get, randomEl, format } from './index'
import name from './name'

export const ip = (n = 1) => {
  if (n !== 1) return (new Array(n)).fill('').map(() => ip())
  return (new Array(4)).fill('').map(() => (Math.random() * 254 + 1).toFixed(0)).join('.')
}

export const username = (derived, n = 1) => {
  if (n !== 1) return (new Array(n)).fill('').map(() => username(derived))
  if (!derived) {
    switch (int(4)) {
      case 0:
        derived = name({ 'justLast': randomEl([true, false]), 'origin': get('address/origins'), 'prefix': false, suffix: false })
        break
      case 1:
        derived = name({ 'justLast': randomEl([true, false]), 'origin': 'netrunner', 'prefix': false, suffix: false })
        break
      case 2:
        derived = get('bs/noun')
        break
      case 3:
        derived = get('catchPhrase/noun')
        break
    }
  }
  return derived.replace(/ /g, randomEl(['.', '_'])).toLowerCase()
}

export const domain = (derived, n = 1) => {
  if (n !== 1) return (new Array(n)).fill('').map(() => domain(derived))
  return format(
    '{0}.{1}',
    username(derived).replace('_', '-'),
    get('domain_suffix')
  )
}

export const email = (derived, n = 1) => {
  if (n !== 1) return (new Array(n)).fill('').map(() => domain(derived))
  switch (int(2)) {
    case 0:
      return username(derived) + '@' + domain()
    case 1:
      return username() + '@' + domain(derived)
  }
}

export default {
  ip,
  username,
  domain,
  email
}
