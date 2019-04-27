'use strict'

const main = (input) => {
    input = input.split('\n').map(i => parseInt(i))
    const A = input[0]
    const B = input[1]
    const C = input[2]
    const D = input[3]

    console.log(Math.min(A, B) + Math.min(C, D))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))