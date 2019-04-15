'use strict'

const main = (input) => {
    input = input.split(' ').map(v => parseInt(v))
    const a = input[0]
    const b = input[1]
    const c = input[2]
    if(a === b){
        console.log(c)
    }else if(a === c){
        console.log(b)
    }else{
        console.log(a)
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))