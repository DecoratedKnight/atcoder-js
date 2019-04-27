'use strict'

const main = (input) => {
    const N = input.split('\n')[0]
    const sum = N.split('').map(i => parseInt(i)).reduce((t, c) => t + c)
    if(N % sum === 0){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))