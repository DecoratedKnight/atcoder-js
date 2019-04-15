'use strict'

const main = (input) => {
    const s = input.split('\n')[0].split('').map(v => parseInt(v))
    const k = parseInt(input.split('\n')[1])

    for(let i = 0; i < k; i++){
        if(s[i] >= 2){
            console.log(s[i])
            return
        }
    }
    console.log(1)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))