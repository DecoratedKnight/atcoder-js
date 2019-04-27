'use strict'

const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0])
    let As = input[1].split(' ').map(v => parseInt(v))
    

    let count = 0
    while(true){
        if(As.some(v => v % 2 !== 0)) break
        As = As.map(v => v / 2)
        count++
    }
    console.log(count)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))