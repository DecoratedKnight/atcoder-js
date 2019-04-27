'use strict'

const main = (input) => {
    input = input.split(' ').map(v => parseInt(v))
    const a = input[0]
    const b = input[1]
    const c = input[2]
    const d = input[3]
    if(b <= c || d <= a){
        console.log(0)
        return
    }
    const arr = [a, b, c, d].sort((a, b) => a - b)
    console.log(arr[2] - arr[1])
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))