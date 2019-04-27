'use strict'

const main = (input) => {
    input = input.split(' ').map(i => parseInt(i))
    const x1 = input[0]
    const y1 = input[1]
    const x2 = input[2]
    const y2 = input[3]
    const x = x2 - x1
    const y = y2 - y1
    console.log('%d %d %d %d', x2 - y, y2 + x, x1 - y, y1 + x)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))