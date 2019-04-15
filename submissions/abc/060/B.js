'use strict'

const main = (input) => {
    input = input.split(' ').map(v => parseInt(v))
    const a = input[0]
    const b = input[1]
    const c = input[2]

    for(let i = 1; i <= a * b; i++){
        if(a * i % b === c){
            console.log('YES')
            return
        }
    }
    console.log('NO')
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))