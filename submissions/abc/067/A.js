'use strict'

const main = (input) => {
    const A = parseInt(input.split(' ')[0])
    const B = parseInt(input.split(' ')[1])
    if(A % 3 === 0 || B % 3 === 0 || (A + B) % 3 === 0){
        console.log('Possible')
    }else{
        console.log('Impossible')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))