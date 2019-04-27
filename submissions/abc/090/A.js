'use strict'

const main = (input) => {
    input = input.split('\n').map(i => i.split(''))
    console.log(input[0][0] + input[1][1] + input[2][2])
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))