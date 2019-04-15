'use strict'

const main = (input) => {
    const oparators = input.split('\n')[0].split('')
    let ans = 0
    for(let val of oparators){
        if(val === '+'){
            ans++
        }else{
            ans--
        }
    }
    console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))