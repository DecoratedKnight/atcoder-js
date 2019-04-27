'use strict'

const main = (input) => {
    const n = parseInt(input)
    let total = 0
    for(let i = 1; i <= n; i++){
        total += i
    }
    console.log(total)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))