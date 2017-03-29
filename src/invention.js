import { randomEl, get, format } from './index'

const formats = [
  '{3} {1}',
  '{3} {4} {1}',
  '{3} {0}{1}',
  '{0}{4} {2}',
  '{3} {0}{1} {2}',
  '{3} {4} {1} {0}{2}',
  '{3} {4} {1} {2}',
  '{3} {0}{4} {1} {2}'
]

export default () => format(randomEl(formats),
  get('invention/prefix'),
  get('invention/function1'),
  get('invention/function2'),
  get('invention/catalyst1'),
  get('invention/catalyst2')
)
