'use strict'

const main = (input) => {
    const A = parseInt(input.split(' ')[0])
    const B = parseInt(input.split(' ')[1])
    console.log(parseInt(Math.max(A+B, A-B, A*B)))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))