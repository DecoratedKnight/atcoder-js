'use strict'

const main = (input) => {
    input = input.split(' ').map(v => parseInt(v))
    const X = input[0]
    const t = input[1]
    console.log(Math.max(0, X - t))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))