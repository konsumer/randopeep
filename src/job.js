import { get, getCount } from './index'

export default (n = 1) => (n === 1) ? get('jobs') : getCount(n, 'jobs')
