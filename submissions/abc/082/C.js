'use strict'

const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0])
    const A = input[1].split(' ').map(v => parseInt(v))
    let obj = {}
    A.forEach(v => {
        if(typeof obj[v] === 'undefined'){
            obj[v] = 0
        }
        obj[v]++
    })
    let count = 0
    for(let key in obj){
        let k = parseInt(key)
        let c = obj[key]
        if(k < c){
            count += c - k
        }
        if(k > c){
            count += c
        }
    }
    console.log(count)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))