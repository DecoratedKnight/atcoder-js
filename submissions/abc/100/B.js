'use strict'

const main = (input) => {
    input = input.split('\n')[0].split(' ').map(i => parseInt(i))
    const D = input[0]
    const N = input[1]

    if(D === 2){
        let num = N * 10000
        if(num % 1000000 === 0){
            console.log(num + 10000)
            return
        }else{
            console.log(num)
            return
        }
    }

    if(D === 1){
        let num = N * 100
        if(num % 10000 === 0){
            console.log(num + 100)
            return
        }else{
            console.log(num)
            return
        }
    }

    if(D === 0){
        let num = N
        if(num % 100 === 0){
            console.log(num + 1)
            return
        }else{
            console.log(num)
            return
        }
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))