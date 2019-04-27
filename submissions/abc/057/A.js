'use strict'

const main = (input) => {
    const a = parseInt(input.split(' ')[0])
    const b = parseInt(input.split(' ')[1])
    if(a + b < 24){
        console.log(a + b)
    }else{
        console.log(a + b - 24)
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))