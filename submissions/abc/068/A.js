'use strict'

const main = (input) => {
    const N = input.split('\n')[0]
    console.log(`ABC${N}`)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))