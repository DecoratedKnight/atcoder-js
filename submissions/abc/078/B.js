'use strict'

const main = (input) => {
    input = input.split(' ').map(v => parseInt(v))
    const X = input[0]
    const Y = input[1]
    const Z = input[2]
    const n = Y + Z
    const w = X - Z
    console.log(Math.floor(w / n))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))