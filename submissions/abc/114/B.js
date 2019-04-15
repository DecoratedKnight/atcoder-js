'use strict'

const main = (input) => {
    const S = input.split('\n')[0]
    let ans = 1000
    for(let i = 0; i < S.length - 2; i++){
        let s = parseInt(S.slice(i, i + 3))
        let diff = Math.abs(753 - s)
        if(diff < ans){
            ans = diff
        }
    }
    console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))