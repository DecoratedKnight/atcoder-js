'use strict'

const main = (input) => {
    input = input.split('\n').map(i => parseInt(i))
    const N = input[0]
    const ds = input.slice(1, N + 1)
    console.log(new Set(ds).size)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))