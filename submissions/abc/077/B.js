'use strict'

const main = (input) => {
    const N = parseInt(input)
    let ans = 0
    for(let i = 0; ; i++){
        let pow = Math.pow(i, 2)
        if(pow > N) break
        ans = pow
    }
    console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))