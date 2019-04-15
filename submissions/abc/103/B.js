'use strict'

const main = (input) => {
    input = input.split('\n')
    const S = input[0] 
    const T = input[1]
    let words = S.split('')
    const Slen = words.length

    for(let i = 0; i < Slen; i++){
        let temp = words.pop()
        words.unshift(temp)
        if(words.join('') === T){
            console.log('Yes')
            return
        }
    }
    console.log('No')
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))