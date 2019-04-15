'use strict'

const main = (input) => {
    const a = parseInt(input.split(' ')[0])
    const b = parseInt(input.split(' ')[1])
    if(a * b % 2 === 0){
        console.log('Even')
    }else{
        console.log('Odd')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))