'use strict'

const main = (input) => {
    input = input.split(' ')
    const N = parseInt(input[0])
    const Y = parseInt(input[1])
    let res10000 = -1
    let res5000 = -1
    let res1000 = -1

    for(let a = 0; a <= N; a++){
        for(let b = 0; b <= N; b++){
            if (a + b > N) continue
            let c = N - a - b
            let total = a * 10000 + b * 5000 + c * 1000
            if(total === Y){
                res10000 = a
                res5000 = b
                res1000 = c
            }
        }    
    }

    console.log('%d %d %d', res10000, res5000, res1000)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))