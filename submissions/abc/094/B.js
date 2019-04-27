'use strict'
const inArray = (needle, haystack) => haystack.some(item => item === needle)
const main = (input) => {
    input = input.split('\n')
    let temp = input[0].split(' ').map(i => parseInt(i))
    const N = temp[0]
    const M = temp[1]
    const X = temp[2]
    const As = input[1].split(' ').map(i => parseInt(i))
    let arr = Array(N+1).fill(false).map((v, i) => inArray(i, As))
    let cost1 = 0
    let cost2 = 0

    for(let i = X; i >= 0; i--){
        if(arr[i]){
            cost1++
        }
    }

    for(let i = X; i <= N; i++){
        if(arr[i]){
            cost2++
        }
    }

    console.log(Math.min(cost1, cost2))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))