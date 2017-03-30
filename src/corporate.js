import { get, format } from './index'
import getName from './name'

export const name = (frm, n = 1) => {
  if (n !== 1) { return (new Array(n)).fill('').map(() => name(frm)) }
  const sOrigins = get('address/origins')
  frm = frm || get('corporate/origins')
  switch (frm) {
    case 'cyber':
      return format(
          '{0}{1}',
          getName({'last': false, 'origin': 'netrunner', 'prefix': false, suffix: false}),
          get('corporate/cyber')
        )
    case 'firm':
        // they are all from the same origin
      var origin = get('corporate/origins')
      return format(
          '{0}, {1} and {2}',
          getName({'justLast': true, 'origin': origin, 'prefix': false, suffix: false}),
          getName({'justLast': true, 'origin': origin, 'prefix': false, suffix: false}),
          getName({'justLast': true, 'origin': origin, 'prefix': false, suffix: false})
        )
    case 'small':
      return format(
          '{0} {1}',
          getName({'justLast': true, 'origin': sOrigins, 'prefix': false, suffix: false}),
          get('corporate/small')
        )
    case 'large':
      return format(
          '{0} {1}',
          getName({'justLast': true, 'origin': sOrigins, 'prefix': false, suffix: false}),
          get('corporate/large')
        )
  }
}

export const catchPhrase = (n = 1) => {
  if (n !== 1) { return (new Array(n)).fill('').map(() => catchPhrase()) }
  return format(
    '{0} {1} {2}',
    get('catchPhrase/adjective'),
    get('catchPhrase/descriptor'),
    get('catchPhrase/noun')
  )
}

export const bs = (n = 1) => {
  if (n !== 1) { return (new Array(n)).fill('').map(() => bs()) }
  return format(
    '{0} {1} {2}',
    get('bs/adjective'),
    get('bs/buzz'),
    get('bs/noun')
  )
}

export default {
  name,
  catchPhrase,
  bs
}
