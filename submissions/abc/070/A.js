'use strict'

const main = (input) => {
    const N = input.split('\n')[0].split('')
    if(N[0] === N[2]){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))