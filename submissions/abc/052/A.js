'use strict'

const main = (input) => {
    input = input.split(' ').map(v => parseInt(v))
    const a = input[0]
    const b = input[1]
    const c = input[2]
    const d = input[3]
    if(a * b >= c * d){
        console.log(a * b)
    }else{
        console.log(c * d)
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))