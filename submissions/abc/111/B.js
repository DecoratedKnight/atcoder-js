'use strict'

const main = (input) => {
    const num = parseInt(input.split('\n')[0])
    for(let i = num; i <= 999; i++){
        if(i % 111 === 0){
            console.log(i)
            break;
        }
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))