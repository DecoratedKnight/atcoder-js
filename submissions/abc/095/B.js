'use strict'

const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0].split(' ')[0])
    const X = parseInt(input[0].split(' ')[1])
    const ms = input.slice(1, N + 1).map(i => parseInt(i))
    const msCount = ms.length
    const sum = ms.reduce((p, v) => p + v)
    const rest = X - sum
    const min = Math.min(...ms)
    const count = Math.floor(rest / min)
    console.log(msCount + count)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))