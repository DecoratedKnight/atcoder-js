'use strict'

const main = (input) => {
    input = input.split('\n')
    const X = parseInt(input[0].split(' ')[2])
    const Y = parseInt(input[0].split(' ')[3])
    const Xs = input[1].split(' ').map(i => parseInt(i))
    const Ys = input[2].split(' ').map(i => parseInt(i))

    const MAX_X = Math.max(...Xs)
    const MIN_Y = Math.min(...Ys)

    for(let i = X + 1; i <= Y; i++) { 
        if(MAX_X < i && i <= MIN_Y){
            console.log('No War')
            return
        }
    }
    console.log('War')
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))