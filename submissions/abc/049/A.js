'use strict'

const main = (input) => {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    const c = input.split('\n')[0]
    if(vowel.indexOf(c) !== -1){
        console.log('vowel')
    }else{
        console.log('consonant')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))