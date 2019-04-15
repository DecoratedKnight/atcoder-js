'use strict'

const inArray = (needle, haystack) => haystack.some(item => item === needle)

const main = (input) => {
    const strings = input.split('\n')[1].split('')

    let ans = 0
    for(let i = 1; i < strings.length; i++){
        let first = strings.slice(0, i)
        let last = strings.slice(i)
        let f2 = [...new Set(first)]
        let tmp = 0
        for(let j = 0; j < f2.length; j++){
            if(inArray(f2[j], last)){
                tmp++
            }
        }
        if(ans < tmp){
            ans = tmp
        }
    }
    console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))