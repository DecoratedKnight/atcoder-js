'use strict'

const main = (input) => {
    const N = parseInt(input.split(' ')[0])
    const K = parseInt(input.split(' ')[1])
    if(N % K === 0){
        console.log(0)
    }else{
        console.log(1)        
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))