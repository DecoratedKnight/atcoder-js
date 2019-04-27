'use strict'

const main = (input) => {
    const N = parseInt(input)
    for(let i = 1; ; i++){
        let num = Math.pow(2, i)
        if(num > N){
            console.log(Math.pow(2, i - 1))
            return
        }
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))