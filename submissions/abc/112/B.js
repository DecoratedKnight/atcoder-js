'use strict'

const main = (input) => {
    input = input.split('\n')
    let temp = input[0].split(' ').map(i => parseInt(i))
    const N = temp[0]
    const T = temp[1]
    temp = input.slice(1, N + 1)
    let minc = 1001
    temp.forEach(t => {
        let temp = t.split(' ').map(i => parseInt(i))
        if(temp[1] <= T){
            minc = Math.min(temp[0], minc) 
        }
    })

    if(minc === 1001){
        console.log('TLE')
    }else{
        console.log(minc)
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))