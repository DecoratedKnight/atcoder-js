'use strict'

const main = (input) => {
    const S = input.split('\n')[0]
    const length = S.length
    const arrLength = [...new Set(S.split(''))].length
    if(length === arrLength){
        console.log('yes')
    }else{
        console.log('no')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))