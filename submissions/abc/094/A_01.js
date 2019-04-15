'use strict'

const main = (input) => {
    input = input.split(' ').map(i => parseInt(i))
    const A = input[0]
    const B = input[1]
    const X = input[2]
    if(A <= X && X <= A + B){
        console.log('YES')
    }else{
        console.log('NO')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))