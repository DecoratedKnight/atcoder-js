'use strict'

const main = (input) => {
    const a = input.split('\n')[0].split(' ')[0]
    const b = input.split('\n')[0].split(' ')[1]
    if(a === b){
        console.log('H')
    }else{
        console.log('D')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))