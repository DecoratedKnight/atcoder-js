'use strict'

const main = (input) => {
    const reverse = str => str.split('').reverse().join('')
    const words = ['dream', 'dreamer', 'erase', 'eraser'].map(reverse)
    const string = reverse(input.split('\n')[0])

    let index = 0
    while(true){
        let w = words.find(w => string.startsWith(w, index))
        if(!w) break
        index += w.length
    }

    if(index === string.length){
        console.log('YES')
    }else{
        console.log('NO')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))