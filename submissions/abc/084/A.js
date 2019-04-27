'use strict'

const main = (input) => {
    const M = parseInt(input)
    console.log(24 + 24 - M)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))