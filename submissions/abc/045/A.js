'use strict'

const main = (input) => {
    input = input.split('\n').map(v => parseInt(v))
    const a = input[0]
    const b = input[1]
    const h = input[2]
    console.log((a + b) * h / 2)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))