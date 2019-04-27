'use strict'
const main = (input) => {
    input = input.split(' ')
    const X = parseInt(input[0])
    const Y = parseInt(input[1])
    console.log('%d', X + Y / 2)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))