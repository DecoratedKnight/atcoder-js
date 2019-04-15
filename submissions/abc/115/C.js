'use strict'

const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0].split(' ')[0])
    const K = parseInt(input[0].split(' ')[1])
    const h = input.slice(1, N + 1).map(v => parseInt(v)).sort((a, b) => a - b)
    
    let max = Number.MAX_SAFE_INTEGER
    for(let i = 0; i <= h.length - K; i++){
        let diff = h[i + K - 1] - h[i]
        if(diff < max){
            max = diff
        }
    }
    console.log(max)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))