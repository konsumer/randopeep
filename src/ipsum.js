import { getCount, titleCase } from './index'

export default (len = 200, list = 'lorem') => {
  const out = []
  const sentenceLengths = [10, 12, 13, 15, 14]
  const words = getCount(len, list)

  words.forEach(function (word, i) {
    if (i === 0 || i % sentenceLengths[i % 5] === 0) {
      word = titleCase(word)
      if (i !== 0) {
        out[i - 1] += '.'
      }
    }
    out.push(word)
  })
  return out.join(' ') + '.'
}
