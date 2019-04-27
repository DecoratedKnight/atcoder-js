'use strict'

const luca = (num) => {
    let sum = []
    for(let i = 0; i <= num; i++){
        if(i === 0){
            sum.push(2)
        }else if(i === 1){
            sum.push(1)
        }else{
            sum.push(sum[i-1] + sum[i-2])
        }
    }
    return sum[num]
}


const main = (input) => {
    const N = parseInt(input)
    console.log(Number.MAX_SAFE_INTEGER)
    console.log(luca(N))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))