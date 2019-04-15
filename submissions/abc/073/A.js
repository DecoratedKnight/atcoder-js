'use strict'

const main = (input) => {
    const N = input.split('\n')[0]
    let flag = false
    N.split('').forEach(v => {
        if(v === '9'){
            flag = true
        }
    })
    if(flag){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))