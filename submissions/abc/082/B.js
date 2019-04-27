'use strict'

const main = (input) => {
    const s = input.split('\n')[0]
    const t = input.split('\n')[1]

    const s1 = s.split('').sort().join('')
    const t1 = t.split('').sort().reverse().join('')

    if(s1 < t1){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))