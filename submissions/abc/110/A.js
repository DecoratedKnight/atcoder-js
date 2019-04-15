'use strict'

const main = (input) => {
    input = input.split('\n')[0].split(' ').map(i => parseInt(i))
    const nums = input.sort((a, b) => b - a)
    console.log(nums[0] * 10 + nums[1] + nums[2])
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))