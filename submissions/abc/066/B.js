'use strict'

const main = (input) => {
    const S = input.split('\n')[0].split('').reverse()
    for(let i = 0; i <= 200; i++ ){
        S.shift()
        if(S.length % 2 !== 0) continue
        let first = S.slice(0, S.length / 2)
        let last = S.slice(S.length / 2)
        if(first.join('') === last.join('')){
            console.log(S.length)
            return
        }
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))