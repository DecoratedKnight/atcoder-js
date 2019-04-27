'use strict'

const main = (input) => {
    const s = input.split('\n')[0].split('')
    console.log(s.filter((v, i) => i % 2 === 0).join(''))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))