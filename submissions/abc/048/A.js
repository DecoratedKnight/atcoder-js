'use strict'

const main = (input) => {
    const s = input.split(' ')[1].split('').shift()
    console.log('A%sC', s)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))