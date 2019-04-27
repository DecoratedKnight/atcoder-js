'use strict'

const main = (input) => {
    const a = parseInt(input.split(' ')[0])
    const b = parseInt(input.split(' ')[1])
    if(b < a){
        console.log(a - 1)
    }else{
        console.log(a)
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))