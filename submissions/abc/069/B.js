'use strict'

const main = (input) => {
    const str = input.split('\n')[0].split('')
    const first = str.shift()
    const last = str.pop()
    console.log(first + str.length.toString() + last)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))