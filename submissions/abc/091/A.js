'use strict'

const main = (input) => {
    input = input.split(' ').map(i => parseInt(i))
    const A = input[0]
    const B = input[1]
    const C = input[2]
    if(A + B >= C){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))