'use strict'

const main = (input) => {
    input = input.split('\n')[0].split(' ').map(i => parseInt(i))
    const a = input[0]
    const b = input[1]
    const diff = b - a

    let arr = []
    for(let i = 1; i < diff; i++){
        arr.push(i)
    }
    const sum = arr.reduce((a, v) => a + v)
    console.log(sum - a)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))