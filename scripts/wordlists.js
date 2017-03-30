/**
 * Generate JSON files for all data-sets from other-peoples data
 */

import glob from 'glob'
import { join, resolve } from 'path'
import { readFileSync as read, writeFileSync as write } from 'fs'

const files = search => {
  return new Promise((resolve, reject) => {
    glob(join(__dirname, `../src/data/${search}`), (err, files) => {
      if (err) return reject(err)
      resolve(files)
    })
  })
}

const wordlistDirRegex = new RegExp(`^${resolve(__dirname, '../src/data')}/`)

const getTextFiles = () => files('**/*.txt')
  .then(files => files.map(file => ({
    [file.replace(wordlistDirRegex, '').replace(/.txt$/, '')]: read(file).toString().replace(/\uFEFF/g, '').split('\n')
  })))

getTextFiles()
  .then(d => {
    const data = {}
    d.forEach(i => {
      Object.keys(i).forEach(v => {
        data[v] = i[v]
      })
    })
    write(join(__dirname, '..', 'src', 'data.json'), JSON.stringify(data, null, 2))
  })
