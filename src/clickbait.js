import { get, format, randomEl } from './index'

const formats = {
  star1: 'Is {0} {1} {2}?',
  star2: 'Is {0} {1} {2} {3}?',
  star3: '{0} {1} {2}, you won\'t guess what happened next!',
  star4: '{0} {1} {2} and you won\'t believe what happened next!'
}

export const headline = (star, mode, withInfo, n) => {
  star = star || get('clickbait/star')
  mode = mode || randomEl(Object.keys(formats))

  const noun = get('clickbait/noun')
  const verb = get('clickbait/verb')
  const modifier = get('clickbait/modifier')

  const out = format(
    formats[mode],
    star,
    verb,
    noun,
    modifier
  )

  return withInfo ? { headline: out, star: star, verb: verb, noun: noun, modifier: modifier } : out
}

export const star = (n = 1) => (n === 1) ? get('jobs') : (new Array(n)).fill('').map(() => get('jobs'))

export default {
  headline,
  star
}
