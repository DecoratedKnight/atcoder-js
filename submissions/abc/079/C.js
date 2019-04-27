'use strict'

const calc = (a, b, ops) => {
    if(ops === '+'){
        return a + b
    }
    return a - b
}

const main = (input) => {
    const nums = input.split('').map(v => parseInt(v))
    const ops = ['+', '-']

    for(let i = 0; i < ops.length; i++){
        for(let j = 0; j < ops.length; j++){
            for(let k = 0; k < ops.length; k++){
                let ans = calc(calc(calc(nums[0], nums[1], ops[i]), nums[2], ops[j]), nums[3], ops[k])
                if(ans === 7){
                    console.log(`${nums[0]}${ops[i]}${nums[1]}${ops[j]}${nums[2]}${ops[k]}${nums[3]}=7`)
                    return
                }
            }
        }
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))