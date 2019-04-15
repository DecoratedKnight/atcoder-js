'use strict'

const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0].split(' ')[0])
    const K = parseInt(input[0].split(' ')[1])
    const arr = input[1].split(' ').map(v => parseInt(v))
    let obj = {}
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]] = 0
        }
        obj[arr[i]]++
    }
    let arr1 = []
    for(let key in obj){
        arr1.push([key, obj[key]])
    }
    arr1.sort((a, b) => a[1] - b[1])
    const arr1Length = arr1.length

    let sum = 0
    for(let i = 0; i < arr1Length - K; i++){
        sum += arr1[i][1]
    }
    console.log(sum)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))