'use strict'

const main = (input) => {
    const x = parseInt(input.split(' ')[0])
    const y = parseInt(input.split(' ')[1])
    const g = [
        [1,3,5,7,8,10,12],
        [4,6,9,11],
        [2],
    ]

    let xi = 0
    let yi = 0

    g.forEach((v, i) => {
        v.forEach(vv => {
            if(vv == x){
                xi = i
            }
            if(vv == y){
                yi = i
            }
        })
    })

    if(xi === yi){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))