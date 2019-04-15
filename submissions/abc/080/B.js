'use strict'

const main = (input) => {
    const N = input.split('\n')[0]
    const fx = N.split('').reduce((p, c) => {
        c = parseInt(c)
         return p + c
    }, 0)
    
    if(parseInt(N) % fx === 0){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))