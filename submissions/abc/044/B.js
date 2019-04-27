'use strict'

const main = (input) => {
    const str = input.split('\n')[0].split('')
    const obj = {}
    new Set(str).forEach(v => {
        obj[v] = 0
    })
    str.forEach(v => {
        obj[v]++ 
    })

    for(let v in obj){
        if(obj[v] % 2 !== 0){
            console.log('No')
            return
        }
    }
    console.log('Yes')
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))