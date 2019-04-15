'use strict'

const main = (input) => {
    input = input.split(' ').map(v => parseInt(v))
    const N = input[0]
    const A = input[1]
    const B = input[2]
    console.log(Math.min(N * A, B))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))