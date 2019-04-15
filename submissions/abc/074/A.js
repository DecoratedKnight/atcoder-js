'use strict'

const main = (input) => {
    const N = parseInt(input.split('\n')[0])
    const A = parseInt(input.split('\n')[1])
    console.log(Math.pow(N, 2) - A)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))