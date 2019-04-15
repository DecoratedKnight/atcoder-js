'use strict'

const main = (input) => {
    const Ns = input.split('\n')[0].split('')
    if((Ns[0] === Ns[1] && Ns[1] === Ns[2]) || (Ns[1] === Ns[2] && Ns[2] === Ns[3])){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))