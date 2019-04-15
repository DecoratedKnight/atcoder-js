'use strict'

const main = (input) => {
    input = input.split('\n').map(i => Number(i))
    const k = input[input.length - 2]
    const array = input.slice(0, 5)
    const max = Math.max(...array)
    const min = Math.min(...array)

    if (max - min <= k) {
      console.log('Yay!')
    } else {
      console.log(':(')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))
