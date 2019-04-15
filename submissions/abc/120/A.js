'use strict'

const main = (input) => {
    input = input.split(' ').map(v => Number(v))
    const a = input[0]
    const b = input[1]
    const c = input[2]

    let count = Math.floor(b / a)
    console.log(Math.min(count, c))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))
