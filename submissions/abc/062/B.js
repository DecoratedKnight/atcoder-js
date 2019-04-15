'use strict'

const main = (input) => {
    input = input.split('\n')
    const H = parseInt(input[0].split(' ')[0])
    const W = parseInt(input[0].split(' ')[1])
    let arr = input.slice(1, H + 1)
    arr = arr.map(v => '#' + v + '#')
    let str = ''
    for(let i = 0; i < W + 2; i++){
        str += '#'
    }
    arr.unshift(str)
    arr.push(str)
    arr.forEach(v => {
        console.log(v)
    })
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))