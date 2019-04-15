'use strict'

const main = (input) => {
    input = input.split('\n')
    const n = parseInt(input[0])
    const p = input.slice(1, n + 1).map(v => parseInt(v)).sort((a, b) => b - a)
    p[0] /= 2
    console.log(p.reduce((p, c) => p + c))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))