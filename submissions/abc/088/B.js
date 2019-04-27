'use strict'

const main = (input) => {
    input = input.split('\n')
    const As = input[1].split(' ').map(i => parseInt(i)).sort((a, b) => b - a)
    let A = []
    let B = []
    As.forEach((v, i) => {
        if(i % 2 === 0){
            A.push(v)
        }else{
            B.push(v)
        }
    })
    console.log(A.reduce((p, c) => p + c) - B.reduce((p, c) => p + c))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))