'use strict'

const main = (input) => {
    const A = parseInt(input.split(' ')[0])
    const B = parseInt(input.split(' ')[1])

    let count = 0
    for(let i = A; i <= B; i++){
        let str = i.toString()
        let rStr = str.split('').reverse().join('')
        if(str === rStr) count++
    }
    console.log(count)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))