'use strict'

const main = (input) => {
    const K = parseInt(input)
    if(K % 2 === 0){
        console.log(Math.pow((K / 2), 2))
    } else {
        let base = Math.floor(K / 2)
        console.log(base * (base + 1))
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))