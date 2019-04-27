'use strict'

const main = (input) => {
    input = input.split(' ').map(v => parseInt(v))
    const x = input[0]
    const a = input[1]
    const b = input[2]
    const absA = Math.abs(x - a)
    const absB = Math.abs(x - b)
    if(absA < absB){
        console.log('A')
    }else{
        console.log('B')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))