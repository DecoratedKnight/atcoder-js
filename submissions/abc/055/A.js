'use strict'

const main = (input) => {
    const n = parseInt(input)
    console.log(800 * n - 200 * Math.floor(n / 15))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))