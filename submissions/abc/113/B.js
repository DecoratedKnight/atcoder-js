'use strict'
const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0])
    let temp = input[1].split(' ')
    const T = parseInt(temp[0])
    const A = parseInt(temp[1])
    let H = input[2].split(' ').map(i => {
        let j = parseInt(i)
        return Math.abs(A - (T - j * 0.006))
    })
    
    let min = 999999
    let index = 0
    H.forEach((v, i) => {
        if(v < min) {
            min = v
            index = i
        }
    })
    console.log(index + 1)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))