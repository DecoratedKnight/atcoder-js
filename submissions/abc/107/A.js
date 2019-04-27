'use strict'

const main = (input) => {
    input = input.split(' ').map(i => parseInt(i))
    const N = input[0]
    const i = input[1]
    console.log(N - i + 1)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))