'use strict'

const main = (input) => {
    input = input.split('\n')[0].split(' ').map(i => parseInt(i))
    const a = input[0]
    const b = input[1]
    console.log((b - a)*(b - a + 1) / 2 - b)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))