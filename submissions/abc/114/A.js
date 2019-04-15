'use strict'

const main = (input) => {
    const X = parseInt(input)
    if(X === 7 || X === 5 || X === 3){
        console.log('YES')
    }else{
        console.log('NO')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))