'use strict'

const main = (input) => {
    const R = parseInt(input)
    if(R < 1200){
        console.log('ABC')
    } else if (R < 2800){
        console.log('ARC')
    } else {
        console.log('AGC')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))