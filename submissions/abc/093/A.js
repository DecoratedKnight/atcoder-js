'use strict'
const inArray = (needle, haystack) => haystack.some(item => item === needle)
const main = (input) => {
    const str = input.split('\n')[0].split('')
    if(inArray('a', str) && inArray('b', str) && inArray('c', str)){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))