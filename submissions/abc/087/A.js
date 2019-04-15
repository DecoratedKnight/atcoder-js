'use strict'

const main = (input) => {
    input = input.split('\n').map(i => parseInt(i))
    const X = input[0]
    const A = input[1]
    const B = input[2]
    console.log((X - A) % B)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))