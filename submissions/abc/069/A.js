'use strict'

const main = (input) => {
    const n = parseInt(input.split(' ')[0])
    const m = parseInt(input.split(' ')[1])
    console.log((n - 1) * (m - 1))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))