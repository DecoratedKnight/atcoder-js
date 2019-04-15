'use strict'

const main = (input) => {
    const N = parseInt(input.split(' ')[0])
    const K = parseInt(input.split(' ')[1])
    const L = N - 1
    console.log(K * Math.pow(K - 1, L))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))