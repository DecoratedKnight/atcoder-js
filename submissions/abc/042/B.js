'use strict'

const main = (input) => {
    input = input.split('\n')
    let temp = input[0].split(' ')
    const N = parseInt(temp[0])
    const L = parseInt(temp[1])
    const strs = input.slice(1, N + 1)
    strs.sort()
    console.log(strs.reduce((sum, v) => sum += v))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))