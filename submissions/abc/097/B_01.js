'use strict'

const main = (input) => {
    const X = parseInt(input)
    let ans = 1
    for(let b = 1; b <= X; b++){
        for(let p = 2; p <= X; p++){
            let pow = Math.pow(b, p)
            if(pow > X) break
            if(pow > ans){
                ans = pow
            }
        }
    }
    console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))