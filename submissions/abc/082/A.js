'use strict'

const main = (input) => {
    const a = parseInt(input.split(' ')[0])
    const b = parseInt(input.split(' ')[1])
    console.log(Math.ceil((a + b) / 2))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))