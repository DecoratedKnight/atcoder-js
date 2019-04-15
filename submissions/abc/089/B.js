'use strict'

const main = (input) => {
    const items = input.split('\n')[1].split(' ')
    const itemSet = new Set(items)
    if(itemSet.size === 4){
        console.log('Four')
    }else{
        console.log('Three')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))