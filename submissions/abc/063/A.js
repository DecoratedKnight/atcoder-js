'use strict'

const main = (input) => {
    const A = parseInt(input.split(' ')[0])
    const B = parseInt(input.split(' ')[1])
    if(A + B < 10){
        console.log(A + B)
    }else{
        console.log('error')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))