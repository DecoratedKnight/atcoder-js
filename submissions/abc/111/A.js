'use strict'

const main = (input) => {
    const anw = input.split('\n')[0].split('').map(i => {
        if(i == '1') return '9'
        return '1' 
    }).join('')
    console.log(anw)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))