import name from './name'
import cc from './cc'
import job from './job'
import ipsum from './ipsum'
import address from './address'
import corporate from './corporate'
import internet from './internet'
import invention from './invention'
import clickbait from './clickbait'

export const titleCase = str => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
export const data = require('../build/wordlists.json')
export const int = max => Math.floor(Math.random() * (max || 10))
export const randomEl = arr => arr[int(arr.length)]
export const replaceSymbolWithNumber = (string, symbol = '#') => string.replace(new RegExp(symbol, 'g'), (match, number) => int(10))

export const get = (...args) => args
  .filter(a => typeof data[a] !== 'undefined')
  .map(a => randomEl(data[a]))
  .join(' ')

export const getCount = (n, list) => (new Array(n)).fill('').map(() => get(list))

const iface = {
  data,
  int,
  randomEl,
  get,
  getCount,
  replaceSymbolWithNumber,
  name,
  cc,
  job,
  ipsum,
  address,
  corporate,
  internet,
  invention,
  clickbait
}
export default iface
module.exports = iface
