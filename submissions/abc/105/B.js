'use strict'

const main = (input) => {
    const N = parseInt(input)

    for(let i = 0; i <= 25; i++){
        for(let j = 0; j <= 25; j++){
            let total = i * 4 + j * 7
            if(total === N){
                console.log('Yes')
                return
            }
        }
    }
    console.log('No')
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))