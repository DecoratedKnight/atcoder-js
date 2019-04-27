'use strict'

const main = (input) => {
    input = input.split(' ').map(v => parseInt(v))
    const a = input[0]
    const b = input[1]
    const c = input[2]
    if(b - a === c - b){
        console.log('YES')
    }else{
        console.log('NO')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))