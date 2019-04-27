'use strict'

const main = (input) => {
    input = input.split('\n').map(i => parseInt(i))
    if(input[0] === 1){
        console.log('Hello World')
    }else{
        console.log(input[1] + input[2])
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))