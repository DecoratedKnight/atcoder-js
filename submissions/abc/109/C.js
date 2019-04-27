'use strict'

const gcd = (a, b) => {
    const r = a % b
    if(r === 0){
        return b
    }
    return gcd(b, r)
}

const main = (input) => {
    input = input.split('\n')
    const n = parseInt(input[0].split(' ')[0])
    const x = parseInt(input[0].split(' ')[1])
    const arr = input[1].split(' ').map(v => Math.abs(parseInt(v) - x))
    console.log(arr.reduce((p, c) => gcd(p, c)))
    
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))