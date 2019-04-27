"use strict";

const main = (input) => {
    input = input.split('\n')
    let nums = input[1].split(' ').map(n => parseInt(n))
    let count = 0

    while(true){
        let exit = false;
        for( let i = 0; i < nums.length; i++ ){
            if(nums[i] % 2 !== 0) exit = true
        }
        if(exit) break
        for( let i = 0; i < nums.length; i++ ){
            nums[i] /= 2
        }
        count++
    }

    // while(nums.every(n => n % 2 === 0)){
    //     count++
    //     nums = nums.map(n => n / 2)
    // }
    console.log(count)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))