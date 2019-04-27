'use strict'

const main = (input) => {
    input = input.split('\n')
    const words = input.slice(1, parseInt(input[0]) + 1)

    if(words.length !== [...new Set(words)].length){
        console.log('No')
        return
    }
    
    let last = ''
    let say = 'Yes'
    words.forEach((v, i) => {
        if(i === 0){
            last = v.split('').pop()
            return
        }
        let char = v.split('')
        let first = char[0]
        if(first !== last) {
            say = 'No'
            return 
        }
        last = char.pop()
    })
    console.log(say)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))