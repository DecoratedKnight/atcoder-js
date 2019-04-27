'use strict'

const main = (input) => {
    input = input.split(' ').map(v => parseInt(v))
    const N = input[0]
    const Y = input[1]
    let xCount = -1
    let yCount = -1
    let zCount = -1

    for(let x = 0; x <= N; x++){
        for(let y = 0; y <= N; y++){
            let z = N - x - y
            let total = 10000 * x + 5000 * y + 1000 * z
            if(z >= 0 && total === Y){
                xCount = x
                yCount = y
                zCount = z
                break
            }
        }
    }

    console.log("%d %d %d", xCount, yCount, zCount)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))