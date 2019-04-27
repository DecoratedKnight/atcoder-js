'use strict'

const main = (input) => {
    const nums = input.split(' ').map(v => parseInt(v)).sort((a, b) => a - b)
    console.log(nums[0] + nums[1])
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))