'use strict'

const main = (input) => {
    input = input.split(' ').map(v => parseInt(v))
    const a = input[0]
    const b = input[1]

    if(a === 1){
        if(b === 1){
            console.log('Draw')
            return
        }else{
            console.log('Alice')
            return
        }
    }
    if(b === 1){
        console.log('Bob')
        return
    }
    if(a > b){
        console.log('Alice')
    }else if(a < b){
        console.log('Bob')
    }else{
        console.log('Draw')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))