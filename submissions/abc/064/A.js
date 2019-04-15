'use strict'

const main = (input) => {
    const num = Number.parseInt(input.split('\n')[0].split(' ').join(''))
    if(num % 4 === 0 ){
        console.log('YES')
    }else{
        console.log('NO')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))