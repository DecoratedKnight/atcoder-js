'use strict'

const main = (input) => {
    input = input.split(' ').map(num => parseInt(num))
    const N = input[0]
    const A = input[1]
    const B = input[2]

    let calcSum = (num) => {
        let sum = 0
        while(num > 0){
            sum += Math.floor(num % 10) // Number型しかないので丸める
            num = Math.floor(num / 10)
        }
        return sum
    }
    let total = 0;
    for(let i = 1; i <= N; i++){
        let sum = calcSum(i)
        if(sum >= A && sum <= B) total += i
    }
    console.log(total)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))