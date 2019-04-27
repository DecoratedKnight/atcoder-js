'use strict'

const main = (input) => {
    const S = input.split('\n')[0]
    const chars = S.split('')

    const first = chars.shift()
    if (first !== 'A') {
        console.log('WA')
        return
    }
    
    const arr = chars.slice(1, -1)
    if(arr.filter(v => v === 'C').length !== 1) {
        console.log('WA')
        return
    }
    let count = 0
    chars.forEach((v) => {
        if(v !== v.toLowerCase()){
            count++
        }
    })
    if(count === 1){
        console.log('AC')
    }else{
        console.log('WA')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))