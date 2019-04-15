'use strict'

const main = (input) => {
    input = input.split(' ').map(i => Number.parseInt(i))
    const a = input[0]
    const b = input[1]
    const c = input[2]
    const d = input[3]

    if(Math.abs(c - a) <= d){
        console.log('Yes')
        return
    }

    if(Math.abs(b - a) <= d && Math.abs(c - b) <= d){
        console.log('Yes')
        return
    }

    console.log('No')
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))