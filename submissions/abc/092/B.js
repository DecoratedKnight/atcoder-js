'use strict'

const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0])
    const D = parseInt(input[1].split(' ')[0])
    const X = parseInt(input[1].split(' ')[1])
    const As = input.slice(2, N + 2).map(i => parseInt(i))
    const counts = As.map((v, i) => {
        let count = 0
        for(let j = 0; ; j++){
            if(v * j + 1 <= D){
                count++
            }else{
                return count
            }
        }
    })
    console.log(counts.reduce((p, c) => p + c) + X)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))