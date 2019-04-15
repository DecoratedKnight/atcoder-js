'use strict'

const divisorCount = (num) => {
    let buffer = []
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            buffer.push(i)
        }
    }
    return buffer.length    
}

const main = (input) => {
    const N = parseInt(input)

    let count = 0
    for(let i = 1; i <= N; i++){
        if(i % 2 === 0) continue
        if(divisorCount(i) === 8) count++
    }
    console.log(count)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))