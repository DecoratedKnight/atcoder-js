'use strict'

const main = (input) => {
    const a = input.split(' ')[0]
    const b = input.split(' ')[1]
    const num = parseInt(a + b)
    const sqrt = Math.floor(Math.sqrt(num)) 
    if(sqrt * sqrt === num){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))