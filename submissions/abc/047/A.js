'use strict'

const main = (input) => {
    const arr = input.split(' ').map(v => parseInt(v)).sort((a, b) => a - b)
    if(arr[0] + arr[1] === arr[2]){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))