'use strict'

const main = (input) => {
    input = input.split('\n').map(i => parseInt(i))
    const N = input[0]
    const A = input[1]
    const r = Math.floor(N % 500)
    if(A >= r){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))