'use strict'

const main = (input) => {
    const N = parseInt(input)
    if(N < 1000){
        console.log('ABC')
    }else{
        console.log('ABD')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))