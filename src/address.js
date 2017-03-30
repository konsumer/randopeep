import { get, getCount, replaceSymbolWithNumber, randomEl, int, format, titleCase } from './index'
import name from './name'

export const zip = (n = 1) => {
  if (n !== 1) { return (new Array(n)).fill('').map(() => zip()) }
  return replaceSymbolWithNumber(randomEl(['#####', '#####-####']))
}

export const geo = (n = 1) => {
  if (n !== 1) { return (new Array(n)).fill('').map(() => geo()) }
  return [(int(180 * 10000) / 10000.0 - 90.0).toFixed(4), (int(360 * 10000) / 10000.0 - 180.0).toFixed(4)]
}

export const state = (n = 1) => (n === 1) ? get('address/us/state') : getCount(n, 'address/us/state')
state.a = (n = 1) => (n === 1) ? get('address/us/state_abbr') : getCount(n, 'address/us/state_abbr')

export const uk = {
  county: (n = 1) => (n === 1) ? get('address/uk/county') : getCount(n, 'address/uk/county'),
  country: (n = 1) => (n === 1) ? get('address/uk/country') : getCount(n, 'address/uk/country')
}

export const phone = (n = 1) => {
  if (n !== 1) { return (new Array(n)).fill('').map(() => phone()) }
  return replaceSymbolWithNumber(get('address/phone'))
}

export const city = (n = 1) => {
  if (n !== 1) { return (new Array(n)).fill('').map(() => city()) }
  const sOrigins = get('address/origins')
  switch (int(6)) {
    case 0:
      return format(
          '{0} {1}{2}',
          get('address/city/prefix'),
          name({'justLast': true, 'origin': sOrigins, 'prefix': false, suffix: false}),
          get('address/city/suffix')
        )
    case 1:
      return format(
          '{0} {1}{2}',
          get('address/city/prefix'),
          name({'last': false, 'origin': sOrigins, 'prefix': false, suffix: false}),
          get('address/city/suffix')
        )
    case 2:
      return format(
          '{0}{1}',
          name({'justLast': true, 'origin': sOrigins, 'prefix': false, suffix: false}),
          get('address/city/suffix')
        )
    case 3:
      return format(
          '{0}{1}',
          name({'last': false, 'origin': sOrigins, 'prefix': false, suffix: false}),
          get('address/city/suffix')
        )
    case 4:
      return format(
          '{0} {1}',
          get('address/city/prefix'),
          name({'justLast': true, 'origin': sOrigins, 'prefix': false, suffix: false})
        )
    case 5:
      return format(
          '{0} {1}',
          get('address/city/prefix'),
          name({'last': false, 'origin': sOrigins, 'prefix': false, suffix: false})
        )
  }
}

const streetName = (n = 1) => {
  if (n !== 1) { return (new Array(n)).fill('').map(() => city()) }
  const sOrigins = get('address/origins')
  switch (int(5)) {
    case 0:
    case 1:
    case 2:
    case 3:
      return format(
          '{0} {1}',
          name({'justLast': true, 'origin': sOrigins, 'prefix': false, suffix: false}),
          get('address/street')
        )
    case 4:
      return format(
          '{0} {1}',
          titleCase(get('bs/noun')),
          get('address/street')
        )
  }
}

const streetAddress = (useFullAddress, n = 1) => {
  if (n !== 1) { return (new Array(n)).fill('').map(() => streetAddress(useFullAddress)) }
  if (useFullAddress === 'random') { useFullAddress = randomEl([true, false]) }
  const out = (useFullAddress) ? ', ' + secondaryAddress() : ''
  switch (int(3)) {
    case 0:
      return replaceSymbolWithNumber('#####') + ' ' + streetName() + out
    case 1:
      return replaceSymbolWithNumber('####') + ' ' + streetName() + out
    case 2:
      return replaceSymbolWithNumber('###') + ' ' + streetName() + out
  }
}

const secondaryAddress = (n = 1) => {
  if (n !== 1) { return (new Array(n)).fill('').map(() => secondaryAddress()) }
  return replaceSymbolWithNumber(randomEl(
    [
      'Apt. ###',
      'Suite ###'
    ]
  ))
}

export default {
  zip,
  geo,
  state,
  uk,
  phone,
  city,
  streetAddress,
  secondaryAddress,
  streetName
}
