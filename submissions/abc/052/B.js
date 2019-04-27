'use strict'

const main = (input) => {
    const S = input.split('\n')[1].split('')
    let max = 0
    let current = 0
    S.forEach(v => {
        if(v === 'I'){
            current++
        }
        if(v === 'D'){
            current--
        }
        if(max < current){
            max = current
        }
    })
    console.log(max)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))