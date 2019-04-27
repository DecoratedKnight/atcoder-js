'use strict'

const main = (input) => {
    input = input.split(' ').map(i => parseInt(i))
    const A = input[0]
    const B = input[1]
    const C = input[2]
    const D = input[3]
    if(A + B === C + D){
        console.log('Balanced')
    }else if(A + B > C + D){
        console.log('Left')
    }else{
        console.log('Right')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))