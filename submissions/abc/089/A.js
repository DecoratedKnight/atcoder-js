'use strict'

const main = (input) => {
    const N = parseInt(input)
    console.log(Math.floor(N / 3))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))