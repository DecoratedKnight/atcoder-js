'use strict'

const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0].split(' ')[0])
    const M = parseInt(input[0].split(' ')[1])
    const nums = input.slice(1, M + 1)
    const arr = new Array(N).fill(0)
    nums.forEach(v => {
        let a = parseInt(v.split(' ')[0]) - 1
        let b = parseInt(v.split(' ')[1]) - 1
        arr[a]++
        arr[b]++
    })
    arr.forEach(v => console.log(v))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))