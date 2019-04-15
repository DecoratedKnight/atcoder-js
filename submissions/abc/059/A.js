'use strict'

const main = (input) => {
    const arr = input.split(' ')
    const str = arr.reduce((p, c) => {
        return p + c.split('').shift().toUpperCase()
    }, '')
    console.log(str)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))