'use strict'

const main = (input) => {
    input = input.split(' ').map(i => parseInt(i))
    const A = input[0]
    const B = input[1]
    const K = input[2]

    let nums = new Set()
    for(let i = A; i <= Math.min(A + K - 1, B); i++){
        nums.add(i)
    }
    for(let i = Math.max(B - K + 1, A + K); i <= B; i++){
        nums.add(i)
    }
    nums.forEach(v => console.log(v))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))