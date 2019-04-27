'use strict'

const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0])
    const K = parseInt(input[1])
    const x = input[2].split(' ').map(v => parseInt(v))
    let sum = 0
    x.forEach(v => {
        let b = Math.abs(K - v)
        if(v < b){
            sum += v * 2
        }else{
            sum += b * 2
        }
    })
    console.log(sum)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))