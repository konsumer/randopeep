import { randomEl, get } from './index'

const defaults = {
  'origin': ['chinese', 'elven', 'elven/dark', 'dwarven', 'english', 'germanic', 'japanese', 'orcish', 'spanish', 'netrunner'],
  'gender': ['male', 'female'],
  'last': true,
  'justLast': false,
  'prefix': [true, false],
  'suffix': [true, false],
  'returnData': false
}

export default (params = {}) => {
  params = Object.assign({}, defaults, params)

  Object.keys(defaults).forEach(i => {
    if (Array.isArray(params[i])) {
      params[i] = randomEl(params[i])
    }
  })

  // some don't have gender
  // some don't have titles
  // some don't have prefixes
  switch (params.origin) {
    case 'elven/dark':
      params.last = false
      params.gender = false
      params.prefix = false
      params.suffix = false
      params.name = get('name/elven/dark')
      break
    case 'dwarven':
      params.last = false
      params.gender = false
      params.prefix = false
      params.suffix = false
      params.name = get('name/dwarven')
      break
    case 'orcish':
      params.last = false
      params.gender = false
      params.prefix = false
      params.suffix = false
      params.name = get('name/orcish')
      break
    case 'netrunner':
      params.name = ''
      if (params.last) {
        if (randomEl([true, false])) {
          params.origin = randomEl(['chinese', 'english', 'germanic', 'japanese', 'spanish'])
          params.name = get(`name/${params.origin}/${params.gender}`)
        } else {
          params.name = get('name/netrunner')
        }
        params.name += ' '
      }
      params.suffix = false
      params.name += get('name/netrunner')
      break
    case 'elven':
      params.prefix = false
      params.suffix = false
      params.name = [params.gender, 'last'].map(e => get(`name/elven/${e}`)).join(' ')
      break
    default:
      if (!params.gender) {
        params.gender = randomEl(['male', 'female'])
      }
      params.name = [params.gender, 'last'].map(e => get(`name/${params.origin}/${e}`)).join(' ')
  }

  if (params.prefix) {
    if (!params.gender) {
      params.gender = randomEl(['male', 'female'])
    }
    params.prefix = get(`name/prefix/${params.gender}`)
    params.name = `${params.prefix} ${params.name}`
  }

  if (params.suffix) {
    params.suffix = get(`name/suffix`)
    params.name = `${params.name} ${params.suffix}`
  }

  return params.returnData ? params : params.name
}
