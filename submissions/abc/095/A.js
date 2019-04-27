'use strict'

const main = (input) => {
    const str = input.split('\n')[0].split('')
    const count = str.filter(i => i === 'o').length
    console.log(700 + (100 * count))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))