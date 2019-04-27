'use strict'

const main = (input) => {
    input = input.split('\n')[1].split(' ').map(item => parseInt(item))
    const numbers = input.sort((a, b) => b - a)
    let aPoint = 0
    let bPoint = 0
    numbers.forEach((num, i) => {
        (i % 2 === 0) ? aPoint += num : bPoint += num
    })
    console.log(aPoint - bPoint)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))