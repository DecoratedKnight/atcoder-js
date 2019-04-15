'use strict'

const exponential = (num) => {
    if(num === 1) return true

    for(let i = 2; i <= num; i++){
        let count = 0
        let num1 = num
        while(num1 % i === 0){
            count++
            num1 /= i
        }
        if(count >= 2 && num1 === 1){
            return true
        }
    }
    return false
}

const main = (input) => {
    const X = parseInt(input)
    const nums = Array(X).fill(0).map((v, i) => i + 1)
    const filterNums = nums.filter(v => exponential(v))
    console.log(filterNums.pop())
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))