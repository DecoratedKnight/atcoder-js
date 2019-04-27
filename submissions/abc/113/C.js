'use strict'
const main = (input) => {
    input = input.split('\n')
    let temp = input[0].split(' ').map(i => parseInt(i))
    const N = temp[0]
    const M = temp[1]
    temp = input.slice(1, M + 1)
    let arr = []
    let aMap = new Map
    temp.forEach((v) => {
        let tmp = v.split(' ').map(i => parseInt(i))
        aMap.set(tmp[1], 0)
        if(arr[tmp[0]] === undefined){
            arr[tmp[0]] = []
        }
        arr[tmp[0]].push(tmp[1])
    })

    arr.forEach((v, i) => {
        v.sort((a, b) => a - b)
        v.forEach((num, j) => {
            let def = ('000000' + i.toString(10)).slice(-6) + ('000000' + (j + 1).toString(10)).slice(-6)
            aMap.set(num, def)
        })
    })
    aMap.forEach(val => console.log(val))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))