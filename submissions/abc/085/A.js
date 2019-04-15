'use strict'

const main = (input) => {
    input = input.split('\n')[0]
    console.log(input.replace('2017', '2018'))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))