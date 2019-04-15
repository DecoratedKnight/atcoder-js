'use strict'

const main = (input) => {
    input = input.split(' ').map(v => parseInt(v))
    const N = input[0]
    const A = input[1]
    const B = input[2]

    let sum = 0
    for(let i = 0; i <= N; i++){
        let add = i.toString().split('').map(v => parseInt(v)).reduce((p, c) => p + c)
        if(A <= add && add <= B){
            sum += i
        }
    }
    console.log(sum)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))