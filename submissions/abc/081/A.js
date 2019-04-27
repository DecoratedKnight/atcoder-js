'use strict'

const main = (input) => {
    const s = input.split('\n')[0]
    let sum = 0
    s.split('').forEach((v, i) => {
        sum += parseInt(v)
    })
    console.log(sum)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))