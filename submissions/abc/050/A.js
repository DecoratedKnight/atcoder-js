'use strict'

const main = (input) => {
    input = input.split(' ')
    const a = parseInt(input[0])
    const op = input[1]
    const b = parseInt(input[2])
    if(op === '+'){
        console.log(a + b)
    }else{
        console.log(a - b)
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))