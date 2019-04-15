'use strict'

const main = (input) => {
    const d = parseInt(input)

    if(d === 25){
        console.log('Christmas')
        return 
    }
    if(d === 24){
        console.log('Christmas Eve')
        return 
    }
    if(d === 23){
        console.log('Christmas Eve Eve')
        return 
    }
    if(d === 22){
        console.log('Christmas Eve Eve Eve')
        return 
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))