'use strict'

const inArray = (needle, haystack) => haystack.some(item => item === needle)

const main = (input) => {
    input = input.split('\n')
    const H = parseInt(input[0].split(' ')[0])
    const W = parseInt(input[0].split(' ')[1])
    const grid = input.slice(1, H + 1).map(w =>  w.split(''))
    const g1 = grid.filter(g => g.some(h => h === '#'))
    let buffer = []
    g1.forEach(g => {
        g.forEach((h, i) => {
            if(h === '#'){
                buffer.push(i)
            }
        })
    })
    buffer = [...new Set(buffer)]
    g1.forEach(g => {
        let str = ''
        g.forEach((h, i) => {
            if(inArray(i, buffer)){
                str += h
            }
            if(i === g.length -1){
                console.log(str)
            }
        })
    })
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))