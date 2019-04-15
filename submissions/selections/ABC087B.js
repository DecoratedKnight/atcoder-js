'use strict'

const main = (input) => {
    input = input.split('\n').map(item => parseInt(item))
    const A = input[0]
    const B = input[1]
    const C = input[2]
    const X = input[3]

    let counter = 0
    for(let a = 0; a <= A; a++){
        for(let b = 0; b <= B; b++){
            for(let c = 0; c <= C; c++){
                const total = (a * 500) + (b * 100) + (c * 50)
                if(total === X) counter++
            }
        }
    }
    console.log(counter)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))