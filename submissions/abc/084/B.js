'use strict'

const main = (input) => {
    input = input.split('\n')
    const A = parseInt(input[0].split(' ')[0])
    const B = parseInt(input[0].split(' ')[1])
    const S = input[1]
    
    let flag = true
    S.split('').forEach((v, i) => {
        if(i === A){
            if(v !== '-'){
                flag = false
            }
        }else{
            if(v === '-'){
                flag = false
            }
        }
    })
    if(flag){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))