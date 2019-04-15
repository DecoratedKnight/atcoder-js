'use strict'

const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0])
    const a = input.slice(1, N + 1).map(v => parseInt(v - 1))
    let nextIndex = 0
    for(let i = 1; i <= N; i++){
        if(a[nextIndex] === 1){
            console.log(i)
            return
        }
        nextIndex = a[nextIndex]
    }
    console.log(-1)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))
