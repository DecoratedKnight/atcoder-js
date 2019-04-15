'use strict'

const main = (input) => {
    const N = parseInt(input)
    if(N % 2 === 0){
        console.log(N)
    } else {
        console.log(N * 2)
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))