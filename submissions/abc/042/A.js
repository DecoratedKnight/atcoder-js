'use strict'

const main = (input) => {
    input = input.split(' ').map(i => parseInt(i))
    let c5 = 0
    let c7 = 0
    input.forEach(i => {
        if(i === 5){
            c5++
        }else{
            c7++
        }
    })
    if(c5 === 2 && c7 === 1){
        console.log('YES')
    }else{
        console.log('NO')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))