'use strict'

const main = (input) => {
    input = input.split('\n').map(v => parseInt(v))
    const r = input[0]
    const g = input[1]
    console.log(2 * g - r)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))