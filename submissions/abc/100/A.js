'use strict'

const main = (input) => {
    input = input.split(' ').map(i => parseInt(i))
    const A = input[0]
    const B = input[1]
    if(A <= 8 && B <= 8){
        console.log('Yay!')
    }else{
        console.log(':(')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))