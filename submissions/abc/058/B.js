'use strict'

const main = (input) => {
    input = input.split('\n')
    const odd = input[0].split('')
    const even = input[1].split('')
    
    let str = ''
    for(let i = 0; i <= even.length - 1; i++){
        str += odd[i]
        str += even[i]
    }

    if(odd.length > even.length){
        str += odd[odd.length - 1]
    }
    console.log(str)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))