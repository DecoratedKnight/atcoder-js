'use strict'

const main = (input) => {
    let nums = input.split('\n')[1].split(' ').map(i => parseInt(i))
    nums = nums.sort((a, b) => a - b)
    const first = nums.shift()
    const last = nums.pop()
    console.log('%d', last - first)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))